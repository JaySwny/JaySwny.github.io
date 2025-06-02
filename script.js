document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(btn => {
    const content = btn.nextElementSibling;
    const isAbtMe = btn.textContent.trim() === "About Me";

    const contentHeight = content.scrollHeight;

    if (isAbtMe) {
      btn.classList.add("active");
      content.classList.remove("closed");
      content.style.maxHeight = contentHeight + "px";
    } else {
      btn.classList.remove("active");
      content.classList.add("closed");
      content.style.maxHeight = "0px";
    }

    btn.addEventListener("click", function () {
      const isClosed = content.classList.contains("closed");

      if (isClosed) {

        content.classList.remove("closed");
        btn.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {

        content.classList.add("closed");
        btn.classList.remove("active");
        content.style.maxHeight = "0px";
      }
    });

 
    window.addEventListener('resize', function() {
      if (!content.classList.contains('closed')) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
