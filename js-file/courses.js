document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { title: "Web Development", description: "Learn HTML, CSS, JavaScript, and more!" },
        { title: "Python Programming", description: "Master Python for web & data science." },
        { title: "Graphic Design", description: "Adobe Photoshop, Illustrator & more." },
        { title: "Data Science", description: "Learn machine learning & AI." },
        { title: "Cyber Security", description: "Protect networks & secure data." },
        { title: "UI/UX Design", description: "Design stunning websites & apps." },
        { title: "Java Programming", description: "Master Java for web & apps." },
        { title: "C++ Programming", description: "Learn C++ for game dev & systems." },
        { title: "Digital Marketing", description: "SEO, social media, and ads." }
    ];

    const container = document.getElementById("courses-container");

    container.innerHTML = courses.map(course => `
        <div class="course-card">
            <h2 class="course-title">${course.title}</h2>
            <p class="course-description">${course.description}</p>
            <div class="button-container">
                <button class="button buy-btn">Buy Course</button>
                <button class="button view-btn">View Course</button>
            </div>
        </div>
    `).join('');
});
