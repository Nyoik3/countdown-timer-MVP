// Get elements from the DOM
const countdownInput = document.getElementById("countdown-date");
const startBtn = document.getElementById("start-btn");
const timer = document.getElementById("timer");

// Countdown function
function startCountdown() {
    // Get the countdown date from the input value
    const countdownDate = new Date(countdownInput.value).getTime();

    // Validate the input date
    if (isNaN(countdownDate)) {
        alert("Please enter a valid date.");
        return;
    }

    // Update the countdown every second
    const countdown = setInterval(() => {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Check if the countdown has ended
        if (distance < 0) {
            clearInterval(countdown);
            timer.innerHTML = "Count
