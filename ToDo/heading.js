let head = document.getElementById('section-1');

let timeBox = document.createElement('div');
timeBox.setAttribute('id', 'today-time');

let hr = document.createElement('hr');

let dateBox = document.createElement('div');
dateBox.setAttribute('id', 'today-date');

setInterval(() => {
    let today = new Date();
    timeBox.innerHTML = today.toLocaleTimeString();
    dateBox.innerHTML = today.toLocaleDateString();
}, 1000);

head.appendChild(timeBox);
head.appendChild(hr);
head.appendChild(dateBox);