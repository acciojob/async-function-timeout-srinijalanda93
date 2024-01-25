document.getElementById("btn").addEventListener("click", async () => {
  const text = document.getElementById("text").value;
  const delay = document.getElementById("delay").value;

  // create a Promise Class where it takes the text in delay ms
  if (text && delay) {
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text);
      }, delay);
    });

    // using await keyword
    let text2 = await p;
    if (text2) {
      document.getElementById("output").textContent = text2;
    }
  }
});
