let interval; // Store interval globally to manage it across functions

window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
    document.querySelector('#stop').onclick = stopCountdown;
};

function calculate() {
    // Clear any existing interval to avoid conflicts
    if (interval) clearInterval(interval);

    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    if (!date || !time) {
        alert("Please enter both date and time.");
        return;
    }

    const endTime = new Date(`${date}T${time}`);
    
    if (isNaN(endTime)) {
        alert("Invalid date or time. Please try again.");
        return;
    }

    if (endTime <= new Date()) {
        alert("The selected time must be in the future.");
        return;
    }

    // Start a new interval to update the countdown
    interval = setInterval(() => calculateTime(endTime), 1000);
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = Math.floor((endTime - currentTime) / 1000);

        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        // Stop the countdown if the target time is reached
        clearInterval(interval);
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        alert("Time is up!");
    }
}

function reset() {
    if (interval) clearInterval(interval);

    document.querySelector('#date').value = '';
    document.querySelector('#time').value = '';
    document.querySelector('#countdown-days').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;
}

function stopCountdown() {
    if (interval) clearInterval(interval);
}
