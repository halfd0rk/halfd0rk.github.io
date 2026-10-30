// The newsletter is not wired up yet. Catch submissions so nothing is sent anywhere.
document.querySelectorAll("form.signup").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var note = form.parentNode.querySelector(".form-note");
    if (note) note.textContent = "Thanks! Signups aren't open yet, so nothing was saved. Check back soon.";
    form.reset();
  });
});

document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
