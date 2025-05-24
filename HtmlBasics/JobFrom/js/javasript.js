document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input, textarea, select");

  inputs.forEach((el) => {
    el.addEventListener("focus", () => {
      el.style.boxShadow = "0 0 5px rgba(0, 64, 128, 0.5)";
    });

    el.addEventListener("blur", () => {
      el.style.boxShadow = "none";
    });
  });

  const form = document.getElementById("applicationForm");
  form.addEventListener("submit", (e) => {
    alert("Your application has been submitted!");
  });
});
