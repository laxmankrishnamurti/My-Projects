async function askData() {
  const response = await fetch(
    "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"
  );
  //   const response = await fetch(
  //     "https://api.github.com/users/laxmankrishnamurti"
  //   );
  const data = await response.json();
  console.log(data);
}
askData();
