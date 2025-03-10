// Select the "Explore My Work" button, "Back to Hero" button, and the sections
const exploreBtn = document.getElementById("explore-btn");
const backBtn = document.getElementById("back-btn");
const hiddenSections = document.getElementById("hidden-sections");
const heroSection = document.querySelector(".hero");

// Event listener for "Explore My Work" button
exploreBtn.addEventListener("click", () => {
    // Hide the hero section
    heroSection.style.opacity = "0";
    setTimeout(() => {
        heroSection.style.display = "none"; // Remove it from layout after fade-out
    }, 300); // Delay to match fade-out timing

    // Show the hidden sections
    hiddenSections.style.display = "block";
    setTimeout(() => {
        hiddenSections.style.opacity = "1"; // Fade in the hidden sections
    }, 10); // Allow a tiny delay before opacity change
});



// Event listener for "Back to Hero" button
backBtn.addEventListener("click", () => {
    // Hide the sections
    hiddenSections.style.opacity = "0";
    setTimeout(() => {
        hiddenSections.style.display = "none"; // Remove sections from layout after fade-out
    }, 300); // Fade-out timing

    // Show the hero section again
    heroSection.style.display = "block";
    setTimeout(() => {
        heroSection.style.opacity = "1"; // Fade in the hero section
    }, 10); // Allow tiny delay before opacity change
});


