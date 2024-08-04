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
