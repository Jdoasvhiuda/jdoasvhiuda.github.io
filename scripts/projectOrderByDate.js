window.addEventListener("DOMContentLoaded", (event) => {
  const container = document.getElementById("projects-container");
  const cards = Array.from(container.getElementsByClassName("project-card"));
  cards.sort(
    (a, b) =>
      new Date(b.getAttribute("data-date")) -
      new Date(a.getAttribute("data-date"))
  );
  cards.forEach((card) => container.appendChild(card));
});
