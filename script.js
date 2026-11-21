const themeButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Light Mode";
}
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
// Project filtering
const projectFilter = document.getElementById("project-filter");
const projectCards = document.querySelectorAll(".project-card");
projectFilter.addEventListener("change", function () {
    const selectedFilter = projectFilter.value;
    projectCards.forEach(function (card) {
        const projectCategory = card.dataset.category;
        if (selectedFilter === "all" ||
            selectedFilter === projectCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
// Project sorting

const projectSort = document.getElementById("project-sort");
const projectsContainer = document.querySelector(".projects-container");

projectSort.addEventListener("change", function () {

    const cards = Array.from(projectCards);

    cards.sort(function (a, b) {

        const titleA = a.querySelector("h2").textContent;
        const titleB = b.querySelector("h2").textContent;

        if (projectSort.value === "az") {
            return titleA.localeCompare(titleB);
        } else {
            return titleB.localeCompare(titleA);
        }

    });

    cards.forEach(function (card) {
        projectsContainer.appendChild(card);
    });

});
// Contact form feedback
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formFeedback.textContent =
        "Thank you! Your form was submitted successfully.";
});
// date api
const currentDate = document.getElementById("current-date");

fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia/Riyadh")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        const date = new Date(data.dateTime);

        currentDate.textContent = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });

    })
    .catch(function () {
        currentDate.textContent = "Date unavailable";
    });
    