const mainContent = document.getElementById('main-content');


function loadPages(page) {
    fetch(page)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok!');
            }
            return response.text();
        })
        .then((html) => {
            mainContent.innerHTML = html

            const cssFile = page.replace('.html', '.css');
            console.log('after done innerhtml ', mainContent);

            //Fetching css file

            fetch(cssFile)
                .then(response => response.text())
                .then((css) => {

                    //Creating Style element.

                    const styleElement = document.createElement('style');
                    styleElement.textContent = css;
                    document.head.appendChild(styleElement);
                })
                .catch((error) => {
                    console.error('Failed to fetch or apply css', error);
                });
            console.log('after css', mainContent);
        })
        .catch((error) => {
            console.error('Failed to fetch HTML: ', error);
        })
    console.log('complition :', mainContent);
}   