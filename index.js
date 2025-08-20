const genIn = document.getElementById("gen-input");
const genOut = document.getElementById("gen-output");
const genStart = document.getElementById("gen-start");
const genRestartBtn = document.getElementById("gen-restart");
const cat1 = "🐈‍⬛";

genStart.addEventListener("click", () => {
  startGens();
});

genRestartBtn.addEventListener("click", () => {
  genRestart();
});

function genRestart() {
  genOut.textContent = ``;
  genIn.value = ``;
}

function startGens() {
  if (genIn.value == null || genIn.value == undefined || genIn.value == ``) {
    genOut.textContent = `Please enter a number!`;
  } else if (genIn.value <= 1) {
    genOut.textContent = `Please enter a number greater than 1.`;
  } else if (genIn.value <= 29999) {
    let generation = ``;
    for (let x = 1; x <= genIn.value; x++) {
      generation += `${cat1} `;
    }
    console.log(`You generated ${genIn.value} cats!`);
    genOut.textContent = generation;
    genIn.textContent = ``;
  } else {
    genOut.textContent = `Please enter a number smaller than 30,000.`;
  }
}
