document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(btn => {
    const content = btn.nextElementSibling;

    // Start open by default
    content.classList.remove("closed");
    btn.classList.add("active");

    btn.addEventListener("click", function () {
      const isOpen = !content.classList.contains("closed");

      // Toggle class to trigger CSS animation
      content.classList.toggle("closed", isOpen);
      btn.classList.toggle("active", !isOpen);
    });
  });
});


