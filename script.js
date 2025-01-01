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
