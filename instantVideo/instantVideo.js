// Minimal JS: toggle specialist groups on disease click
document.addEventListener("DOMContentLoaded", () => {
  const diseaseButtons = document.querySelectorAll(".disease");
  const groups = document.querySelectorAll(".specialist-group");

  diseaseButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");

      // hide all groups
      groups.forEach(g => (g.style.display = "none"));

      // show selected group if exists
      const chosen = document.getElementById(target);
      if (chosen) {
        chosen.style.display = "grid";
        chosen.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
