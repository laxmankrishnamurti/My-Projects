const APIkey = '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';
const URL = 'https://api.openai.com/v1/chat/completions';

const options = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + token,
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

function apiRquestWithRetries(url, options, retries = 0) {
    return fetch(url, options)
        .then((response) => {
            if (response.status === 429 && retries < maxRetries) {
                return new Promise(resolve)
            }
        })
}