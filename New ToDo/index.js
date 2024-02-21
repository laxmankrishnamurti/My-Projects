const displayTime = document.getElementById('display-time');
const displayDate = document.getElementById('display-date');

setInterval(() => {
    let today = new Date();
    displayTime.textContent = today.toLocaleTimeString();
    displayDate.textContent = today.toLocaleDateString();
}, 1000);