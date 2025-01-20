document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box');

    // Set up click event for toggling text and image visibility
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function () {
            const boxIndex = this.id.match(/\d+/)[0]; // Extract box number
            const images = document.querySelectorAll(`#box${boxIndex} .box-image`);
            const textArea = document.getElementById(`text${boxIndex}`);

            if (this.id.startsWith('show-image')) {
                images.forEach(img => img.style.display = 'none'); // Hide all images first
                images[0].style.display = 'block'; // Show the first image
                textArea.style.display = 'none'; // Hide text
            } else {
                images.forEach(img => img.style.display = 'none'); // Hide all images
                textArea.style.display = 'block'; // Show text
            }
        });
    });

    // Set up click events for "Next" and "Previous" buttons
    document.querySelectorAll('.prev-image, .next-image').forEach(button => {
        button.addEventListener('click', function () {
            const boxIndex = this.id.match(/\d+/)[0]; // Extract box number
            const images = document.querySelectorAll(`#box${boxIndex} .box-image`);
            let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');

            // Hide current image
            if (currentIndex >= 0) images[currentIndex].style.display = 'none';

            // Determine next or previous index
            if (this.classList.contains('next-image')) {
                currentIndex = (currentIndex + 1) % images.length; // Wrap around on next
            } else {
                currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around on prev
            }

            // Show new image
            images[currentIndex].style.display = 'block';
        });
    });

    // Expand box and display its content based on the current month
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // JavaScript months are 0-11

    boxes.forEach((box, index) => {
        const month = index + 1;
        const cover = box.querySelector('.cover');
        const content = box.querySelector('.content');

        box.querySelector('.cover').textContent = getMonthName(month);

        box.addEventListener('click', function () {
            if (month <= currentMonth) {
                if (month === currentMonth) {
                    document.querySelector('.container').style.transform = 'scale(0.9)';
                    box.classList.add('expanded');
                    cover.classList.add('active');
                    content.style.display = 'flex'; // Show content as flex
                } else {
                    alert('Not Yet');
                }
            } else {
                alert('Not Yet');
            }
        });
    });

    function getMonthName(month) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month - 1];
    }
});

        // Optionally: Trigger resize for prefilled text
        textarea.dispatchEvent(new Event("input"));
    });
});
