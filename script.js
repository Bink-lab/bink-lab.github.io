document.addEventListener('DOMContentLoaded', function () {
    // Set the date for Christmas
    const christmasDate = new Date('December 25, 2023 00:00:00').getTime();

    // Update the countdown every second
    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const timeDifference = christmasDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display a message
        if (timeDifference < 0) {
            clearInterval(countdown);
            document.getElementById('timer').innerHTML = 'Merry Christmas!';
        }
    }, 1000);
});
