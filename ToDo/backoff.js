// const APIkey = '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';
const newkey = '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'
const URL = 'https://api.openai.com/v1/chat/completions';

const options = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + newkey,
    },
    body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": "Who is Elon Musk?",
            },
        ],
    }),
}

const maxRetries = 3;
const delayBetweenRetries = 1000; //In milisecond.

function requestWithBackOff(url, option, retries = 0) {
    return fetch(url, option)
        .then((response) => {
            if (response.status === 429 && retries < maxRetries) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(requestWithBackOff(url, option, retries + 1))
                    }, delayBetweenRetries * (retries + 1));
                })
            }
            return response.json();
        })
}

requestWithBackOff(URL, options)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Err : ', error);
    })