const lightbox = document.getElementById("projectLightbox");
const lightboxImage = document.getElementById("projectLightboxImage");
const lightboxTitle = document.getElementById("projectLightboxTitle");
const downloadLink = document.getElementById("projectDownload");
const closeButton = document.getElementById("projectLightboxClose");

function closeProjectLightbox() {
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.classList.remove("lightbox-open");
}

document.querySelectorAll(".image-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const fullImage = button.dataset.full;
    const title = button.dataset.title || "Project screenshot";
    const image = button.querySelector("img");

    lightboxTitle.textContent = title;
    lightboxImage.src = fullImage;
    lightboxImage.alt = image ? image.alt : title;
    downloadLink.href = fullImage;
    downloadLink.download = fullImage.split("/").pop() || "project-screenshot.png";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  });
});

closeButton.addEventListener("click", closeProjectLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeProjectLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.getAttribute("aria-hidden") === "false") {
    closeProjectLightbox();
  }
});
