// JavaScript to handle box toggles
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        const showImageButton = box.querySelector(".toggle-button#show-image" + box.id.slice(-1));
        const showTextButton = box.querySelector(".toggle-button#show-text" + box.id.slice(-1));
        const images = box.querySelectorAll(".box-image");
        const textArea = box.querySelector("textarea");
        const nextImageButton = box.querySelector(".next-image");
        const prevImageButton = box.querySelector(".prev-image");
        let currentImageIndex = 0;

        // Show images
        if (showImageButton) {
            showImageButton.addEventListener("click", () => {
                textArea.style.display = "none";
                if (images.length > 0) {
                    images.forEach((img) => (img.style.display = "none"));
                    images[currentImageIndex].style.display = "block";
                } else {
                    alert("No images available!");
                }
            });
        }

        // Show text
        if (showTextButton) {
            showTextButton.addEventListener("click", () => {
                images.forEach((img) => (img.style.display = "none"));
                textArea.style.display = "block";
            });
        }

        // Next image
        if (nextImageButton) {
            nextImageButton.addEventListener("click", () => {
                if (images.length > 0) {
                    images[currentImageIndex].style.display = "none";
                    currentImageIndex = (currentImageIndex + 1) % images.length;
                    images[currentImageIndex].style.display = "block";
                } else {
                    alert("No more images!");
                }
            });
        }

        // Previous image
        if (prevImageButton) {
            prevImageButton.addEventListener("click", () => {
                if (images.length > 0) {
                    images[currentImageIndex].style.display = "none";
                    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                    images[currentImageIndex].style.display = "block";
                } else {
                    alert("No previous images!");
                }
            });
        }
    });
});
