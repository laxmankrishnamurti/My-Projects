const mainContent = document.getElementById('main-content');


function loadPages(page) {
    fetch(page)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok!');
            } else {
                return response.text();
            }
        })
        .then((html) => {
            mainContent.innerHTML = html

            const cssFile = page.replace('.html', '.css');
            const jsFile = page.replace('.html', '.js')


            //Fetching css file

            fetch(cssFile)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Unable to fetch the css file')
                    } else {
                        return response.text()
                    }
                })
                .then((css) => {

                    //Creating Style element.

                    const styleElement = document.createElement('style');
                    styleElement.textContent = css;
                    document.head.appendChild(styleElement);
                })
                .catch((error) => {
                    console.error('Failed to fetch or apply css', error);
                });

            //Fetching and Executing javascript file

            fetch(jsFile)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Unable to fetch the Javascript file')
                    } else {
                        return response.text()
                    }
                })
                .then((js) => {
                    const scriptElement = document.createElement('script')
                    scriptElement.textContent = js
                    document.head.appendChild(scriptElement)
                })
                .catch((error) => {
                    console.log('Failed to fetch or Execute JavaScript file')
                })
        })
        .catch((error) => {
            console.error('Failed to fetch HTML: ', error);
        })
}   