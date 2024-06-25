const adviceButton = document.querySelector(".advice-button");
const adviceNumber = document.querySelector(".advice-number");
const adviceQuote = document.querySelector(".advice-quote");

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    console.error(e);
  }
}

async function replaceContent() {
  const response = await fetchAdvice();
  adviceNumber.innerText = response.advices.id;
  adviceQuote.innerText = `${response.advices.advice}`;
}

replaceContent();

adviceButton.addEventListener(replaceContent);