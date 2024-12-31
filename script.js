document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // JavaScript months are 0-11

    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index) => {
        const month = index + 1;
        const cover = box.querySelector('.cover');
        const content = box.querySelector('.content');

        box.querySelector('.cover').textContent = getMonthName(month);

        box.addEventListener('click', function() {
            if (month <= currentMonth) {
                if (month === currentMonth) {
                    document.querySelector('.container').style.transform = 'scale(0.9)';
                    box.classList.add('expanded');
                    cover.classList.add('active');
                    content.style.display = 'flex'; // Change display to flex
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
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const boxIndex = this.id.match(/\d+/)[0]; // Get the number from the button ID
        const image = document.getElementById(`image${boxIndex}`);
        const textArea = document.getElementById(`text-area${boxIndex}`);
        
        if (this.id.startsWith('show-image')) {
            image.style.display = 'block';
            textArea.style.display = 'none';
        } else {
            image.style.display = 'none';
            textArea.style.display = 'block';
        }
    });
});

// Select all the boxes
const boxes = document.querySelectorAll('.box');

// Add event listeners to each box for expansion
boxes.forEach((box) => {
    box.addEventListener('click', function () {
        // Toggle the 'expanded' class for the clicked box
        this.classList.toggle('expanded');
        
        // Toggle visibility of content inside the box
        const content = this.querySelector('.content');
        if (content) {
            content.classList.toggle('visible');
        }
    });

    // Set up image navigation inside the box
    const imageGallery = box.querySelector('.image-gallery');
    if (imageGallery) {
        const images = imageGallery.querySelectorAll('img');
        const nextButton = imageGallery.querySelector('.next-button');
        const prevButton = imageGallery.querySelector('.prev-button');
        let currentImageIndex = 0;

        // Function to update the visible image
        function updateImageVisibility() {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentImageIndex);
            });
        }

        // Show the next image
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                updateImageVisibility();
            });
        }

        // Show the previous image
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                updateImageVisibility();
            });
        }

        // Initialize the first image as visible
        updateImageVisibility();
    }
});

// Optional: Prevent clicks on the buttons from collapsing/expanding the box
const buttons = document.querySelectorAll('.toggle-button, .image-toggle-buttons button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

