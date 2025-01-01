document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index) => {
        const month = index + 1;
        const cover = box.querySelector('.cover');
        const content = box.querySelector('.content');
        const images = box.querySelectorAll('.box-image');
        let currentImageIndex = 0;

        box.querySelector('.cover').textContent = getMonthName(month);

        box.addEventListener('click', function() {
            if (month <= currentMonth) {
                if (month === currentMonth) {
                    document.querySelector('.container').style.transform = 'scale(0.9)';
                    box.classList.add('expanded');
                    cover.classList.add('active');
                    content.style.display = 'flex';
                } else {
                    alert('Not Yet');
                }
            } else {
                alert('Not Yet');
            }
        });

        const prevButton = box.querySelector('.prev-image');
        const nextButton = box.querySelector('.next-image');

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', function() {
                images[currentImageIndex].style.display = 'none';
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                images[currentImageIndex].style.display = 'block';
            });

            nextButton.addEventListener('click', function() {
                images[currentImageIndex].style.display = 'none';
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].style.display = 'block';
            });
        }
    });

    function getMonthName(month) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month - 1];
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Toggle image and text visibility
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function () {
            const boxIndex = this.id.match(/\d+/)[0]; // Extract box number
            const images = document.querySelectorAll(`#box${boxIndex} .box-image`);
            const textArea = document.getElementById(`text${boxIndex}`);

            if (this.id.startsWith('show-image')) {
                images.forEach(img => img.style.display = 'block'); // Show images
                textArea.style.display = 'none'; // Hide text
            } else {
                images.forEach(img => img.style.display = 'none'); // Hide images
                textArea.style.display = 'block'; // Show text
            }
        });
    });

    // Image navigation (next and previous)
    document.querySelectorAll('.prev-image, .next-image').forEach(button => {
        button.addEventListener('click', function () {
            const month = this.getAttribute('data-month');
            const images = document.querySelectorAll(`#box${month} .box-image`);
            let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');

            // Hide current image
            images[currentIndex].style.display = 'none';

            // Determine next or previous index
            if (this.classList.contains('next-image')) {
                currentIndex = (currentIndex + 1) % images.length;
            } else {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }

            // Show new image
            images[currentIndex].style.display = 'block';
        });
    });
});
