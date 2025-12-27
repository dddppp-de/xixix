<script>
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(async el => {
    const file = el.getAttribute("data-include");
    const response = await fetch(file);
    el.innerHTML = response.ok
      ? await response.text()
      : "<p>Bereich konnte nicht geladen werden.</p>";
  });
});
</script>