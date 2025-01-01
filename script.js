document.addEventListener("DOMContentLoaded", () => {
    const currentMonth = new Date().getMonth(); // 0 = January, 1 = February, ...

    // Add functionality to each box
    document.querySelectorAll(".box").forEach((box, index) => {
        const toggleImageButton = box.querySelector(`#show-image${index + 1}`);
        const toggleTextButton = box.querySelector(`#show-text${index + 1}`);
        const images = box.querySelectorAll(".box-image");
        const textArea = box.querySelector(`#text-area${index + 1}`);
        const prevButton = box.querySelector(`#prev-image${index + 1}`);
        const nextButton = box.querySelector(`#next-image${index + 1}`);

        let currentImageIndex = 0;

        // Only enable the current month's box
        if (index !== currentMonth) {
            box.querySelector(".content").style.display = "none";
            return;
        }

        // Show/hide image
        if (toggleImageButton) {
            toggleImageButton.addEventListener("click", () => {
                images.forEach(img => (img.style.display = "none"));
                images[currentImageIndex].style.display = "block";
            });
        }

        // Show/hide text
        if (toggleTextButton) {
            toggleTextButton.addEventListener("click", () => {
                textArea.style.display =
                    textArea.style.display === "none" ? "block" : "none";
            });
        }

        // Previous image
        if (prevButton) {
            prevButton.addEventListener("click", () => {
                images[currentImageIndex].style.display = "none";
                currentImageIndex =
                    (currentImageIndex - 1 + images.length) % images.length;
                images[currentImageIndex].style.display = "block";
            });
        }

        // Next image
        if (nextButton) {
            nextButton.addEventListener("click", () => {
                images[currentImageIndex].style.display = "none";
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].style.display = "block";
            });
        }
    });
});
