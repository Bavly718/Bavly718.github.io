document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box');

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
                adjustHeight(textArea); // Adjust the height dynamically
            }
        });
    });

    function adjustHeight(textarea) {
        if (textarea) {
            textarea.style.height = "auto"; // Reset height
            textarea.style.height = textarea.scrollHeight + "px"; // Adjust height based on content
        }
    }

    // Ensure text areas adjust height on load if they have content
    document.querySelectorAll('textarea').forEach(textarea => {
        adjustHeight(textarea);
        textarea.addEventListener("input", () => adjustHeight(textarea)); // Adjust on input change
    });

    // Set up click events for "Next" and "Previous" buttons
    document.querySelectorAll('.prev-image, .next-image').forEach(button => {
        button.addEventListener('click', function () {
            const boxIndex = this.dataset.month; // Get month number
            const images = document.querySelectorAll(`#box${boxIndex} .box-image`);
            let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');

            if (currentIndex >= 0) images[currentIndex].style.display = 'none';

            if (this.classList.contains('next-image')) {
                currentIndex = (currentIndex + 1) % images.length; // Wrap around
            } else {
                currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around
            }

            images[currentIndex].style.display = 'block';
        });
    });

    // Expand box and display its content based on the current month
    const today = new Date();
    const currentMonth = today.getMonth() + 1; 

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
                    content.style.display = 'flex'; 
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
