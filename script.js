// script.js
const faqToggles = document.querySelectorAll(".faq-question");

faqToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
    const answer = toggle.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      toggle.querySelector(".faq-toggle").textContent = "+";
    } else {
      answer.style.display = "block";
      toggle.querySelector(".faq-toggle").textContent = "-";
    }
  });
});
