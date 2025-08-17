const genIn = document.getElementById("gen-input");
const genOut = document.getElementById("gen-output");
const genStart = document.getElementById("gen-start");
const genRestartBtn = document.getElementById("gen-restart");
const char = "🐈‍⬛";

genStart.addEventListener("click", () => {
  startGens();
});

genRestartBtn.addEventListener("click", () => {
  genRestart();
});

function genRestart() {
  genOut.textContent = ``;
  genIn.textContent = ``;
}

function startGens() {
  if (genIn.value == null || genIn.value == undefined || genIn.value == ``) {
    genOut.textContent = `Please enter a number!`;
  } else if (genIn.value <= 0) {
    genOut.textContent = `Please enter a number greater than 0.`;
  } else if (genIn.value <= 19999) {
    genOut.textContent = ``;
    console.log(genIn.value);
    for (let x = 1; x <= genIn.value; x++) {
      console.log(genIn.value);
      genOut.textContent += `${char} `;
    }
    genIn.value = ``;
    genIn.textContent = ``;
  } else {
    genOut.textContent = `Please enter a number smaller than 20,000.`;
  }
}
