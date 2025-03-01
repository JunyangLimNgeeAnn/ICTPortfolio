document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded");

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});


