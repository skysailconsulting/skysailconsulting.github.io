// Contact form submission
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const btn = form.querySelector(".btn-submit");
    btn.textContent = "Sending...";
    btn.disabled = true;

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form
        .querySelectorAll(".form-group, .form-row")
        .forEach((el) => (el.style.display = "none"));
      form.querySelector("h3").style.display = "none";
      btn.style.display = "none";
      document.getElementById("thank-you").style.display = "block";
    } else {
      btn.textContent = "Something went wrong — try again";
      btn.disabled = false;
    }
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
