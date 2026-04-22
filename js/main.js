function handleSubmit() {
  const btn = document.querySelector(".btn-submit");
  btn.textContent = "Message sent!";
  btn.style.background = "#1a3a5c";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "Send message";
    btn.style.background = "";
    btn.disabled = false;
  }, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
