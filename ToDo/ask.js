const token = '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'
const requestURL = "https://api.openai.com/v1/chat/completions";
const display = document.getElementById('ask-content')

fetch(requestURL, {
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
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    display.innerText = data.choices[0].message.content;
  })
  .catch((error) => {
    console.error(`Err : ${error}`);
  })