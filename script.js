// Année automatique
document.getElementById("year").textContent = new Date().getFullYear();

// Validation formulaire
const form = document.getElementById("contact-form");
const status = document.querySelector(".form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === "" || email === "" || message === "") {
    status.textContent = "❌ Veuillez remplir tous les champs.";
    return;
  }

  if (message.length < 10) {
    status.textContent = "❌ Le message doit contenir au moins 10 caractères.";
     return;
  }

  status.textContent = "✅ Message envoyé (simulation)";
  form.reset();
});

// Bouton mode sombre
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
 document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀ Mode clair"
    : "🌙 Mode sombre";
});
