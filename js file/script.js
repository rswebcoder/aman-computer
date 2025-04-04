// Navbar ko load karne ka function
function loadNavbar() {
    fetch('/pages/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        attachEventListeners();  // Navbar ke buttons ko event listener attach karne ke liye
    })
    .catch(error => console.error("Error loading navbar:", error));
}

// Navbar ka function call karo jab page load ho
document.addEventListener("DOMContentLoaded", loadNavbar);

function attachEventListeners() {
    var menuBtn = document.getElementById("menuBtn");
    var mobileMenu = document.getElementById("mobileMenu");
    var dropdown = document.querySelector(".dropdown");

    if (menuBtn) {
        menuBtn.addEventListener("click", function() {
            mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
        });
    }

    document.addEventListener("click", function(event) {
        if (dropdown && !loginBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
}
// hero js
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text");

    function startTypingAnimation() {
        typingText.classList.remove("typing"); // Remove animation class
        void typingText.offsetWidth; // Trigger reflow to restart animation
        typingText.classList.add("typing"); // Re-add animation class
    }

    // Run the typing animation every 5 seconds
    setInterval(startTypingAnimation, 5000);

    // Start animation initially
    startTypingAnimation();
});
// footer js
document.addEventListener("DOMContentLoaded", function () {
    // Footer ko dynamically load karne ke liye
    fetch("/pages/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
            document.getElementById("year").textContent = new Date().getFullYear();
        });
});
// pdf notes js
document.addEventListener("DOMContentLoaded", function () {
    const pdfFiles = ["sample.pdf", "sample.pdf", "sample.pdf", "sample.pdf", "sample.pdf", "sample.pdf"];
    const pdfGrid = document.getElementById("pdfGrid");

    function createPDFBox(pdfFile) {
        const div = document.createElement("div");
        div.className = "pdf-box";
        div.innerHTML = `
            <iframe src="${pdfFile}" class="pdf-frame"></iframe>
            <button class="download-btn" onclick="startCountdown(this, '${pdfFile}')">
                Download
            </button>
        `;
        pdfGrid.appendChild(div);
    }

    pdfFiles.forEach(pdf => createPDFBox(pdf));
});

function startCountdown(button, pdfFile) {
    let timeLeft = 5;
    button.disabled = true;
    button.textContent = `Downloading in ${timeLeft}...`;
    const countdown = setInterval(() => {
        timeLeft--;
        button.textContent = `Downloading in ${timeLeft}...`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            button.textContent = "Download";
            button.disabled = false;
            window.location.href = pdfFile;
        }
    }, 1000);
}
// certificate js 
// script.js
document.getElementById('verification-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Certificate verification submitted!');
});
// about is js
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page Loaded!");
});
// contact js 
document.addEventListener("DOMContentLoaded", function() {
    console.log("Contact page loaded!");
});
// gallery js
// Open Full-Screen Image
function openFullScreen(img) {
    const modal = document.getElementById("fullscreen-modal");
    const fullscreenImg = document.getElementById("fullscreen-img");

    fullscreenImg.src = img.src;
    modal.style.display = "flex";
}

// Close Full-Screen Image
function closeFullScreen() {
    document.getElementById("fullscreen-modal").style.display = "none";
}




