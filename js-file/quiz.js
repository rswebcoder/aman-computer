const quizData = {
    webdev: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "High Text Machine Learning"], answer: "Hyper Text Markup Language" },
        { question: "Which language is used for styling web pages?", options: ["HTML", "CSS", "Python", "Java"], answer: "CSS" }
    ],
    datasci: [
        { question: "Which language is best for Data Science?", options: ["Python", "C++", "Java", "Swift"], answer: "Python" }
    ],
    ai: [
        { question: "What is AI?", options: ["Artificial Intelligence", "Automated Internet", "Augmented Interface", "Algorithmic Integration"], answer: "Artificial Intelligence" }
    ]
};

let currentQuiz = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let incorrectList = [];
let timer;

function loadQuiz(course) {
    document.getElementById("quizContainer").classList.remove("hidden");
    document.getElementById("resultContainer").classList.add("hidden");
    currentQuiz = quizData[course];
    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    incorrectList = [];
    loadQuestion();
}

function loadQuestion() {
    if (currentIndex >= currentQuiz.length) {
        showResult();
        return;
    }
    clearTimeout(timer);
    let questionData = currentQuiz[currentIndex];
    document.getElementById("question").innerText = questionData.question;
    document.getElementById("options").innerHTML = questionData.options.map(opt => 
        `<button onclick="checkAnswer(this, '${opt}')" class="option-btn">${opt}</button>`
    ).join('');
    startTimer();
}

function startTimer() {
    let timeLeft = 30;
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            wrongCount++;
            incorrectList.push(currentQuiz[currentIndex].question);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(button, selected) {
    clearInterval(timer);
    let correctAnswer = currentQuiz[currentIndex].answer;
    if (selected === correctAnswer) {
        button.style.backgroundColor = "#10b981"; // Green
        correctCount++;
    } else {
        button.style.backgroundColor = "#ef4444"; // Red
        wrongCount++;
        incorrectList.push(currentQuiz[currentIndex].question);
        document.querySelectorAll(".option-btn").forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.style.backgroundColor = "#10b981";
            }
        });
    }
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("resultContainer").classList.remove("hidden");
    document.getElementById("correctAnswers").innerText = `✅ Correct Answers: ${correctCount}`;
    document.getElementById("wrongAnswers").innerText = `❌ Wrong Answers: ${wrongCount}`;
    document.getElementById("incorrectList").innerText = `❌ Wrong Questions: ${incorrectList.join(', ')}`;
}

function restartQuiz() {
    document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("resultContainer").classList.add("hidden");
}
