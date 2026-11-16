document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("video-modal");
    const player = document.getElementById("video-modal-player");
    const title = document.getElementById("video-modal-title");
    const closeButton = document.querySelector(".video-modal-close");
  
    // If the modal isn't supported, video links open normally.
    if (!modal || !player || !title || !closeButton ||
        typeof modal.showModal !== "function") {
      return;
    }
  
    let previousFocus = null;
  
    document.querySelectorAll(".open-video").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        previousFocus = link;
        title.textContent = link.dataset.videoTitle || "Video";
        player.title = title.textContent;
        player.src = link.href;
  
        modal.showModal();
        closeButton.focus();
      });
    });
  
    closeButton.addEventListener("click", function () {
      modal.close();
    });
  
    // Removing the player URL stops the video when the modal closes.
    modal.addEventListener("close", function () {
      player.removeAttribute("src");
  
      if (previousFocus) {
        previousFocus.focus();
      }
    });
  
    // Close when the visitor clicks outside the modal.
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.close();
      }
    });
  });