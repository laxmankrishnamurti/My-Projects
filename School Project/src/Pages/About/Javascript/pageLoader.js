const mainContent = document.getElementById('main-content');
const aboutSchool = document.getElementById('about-school');

// function loadPage(page) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 mainContent.innerHTML = xhr.responseText;
//             } else {
//                 console.error('Error ' + xhr.status);
//             }
//         }
//     }

//     xhr.open('GET', page, true)
//     xhr.send()
// }

function loadPages(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok!');
            }
            return response.text()
        })
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation :', error);
        });
}