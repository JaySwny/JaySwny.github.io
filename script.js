document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(btn => {
    const content = btn.nextElementSibling;

    const isJaySection = btn.textContent.trim() === "About Me";

    // Open only "Jay Sweeney" section
    if (isJaySection) {
      content.classList.remove("closed");
      btn.classList.add("active");
    } else {
      content.classList.add("closed");
      btn.classList.remove("active");
    }

    btn.addEventListener("click", function () {
      const isOpen = !content.classList.contains("closed");

      content.classList.toggle("closed", isOpen);
      btn.classList.toggle("active", !isOpen);
    });
  });
});
