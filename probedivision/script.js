const input = document.getElementById("input");
const button = document.getElementById("calculate");
const output = document.getElementById("output");
const way = document.getElementById("weg");

const factors = [];
let rechenweg = "";

if (button) {
  button.addEventListener("click", () => {
    factors.length = 0;
    rechenweg = "";
    const number = Number(input.value);
    let x = number;
    output.innerHTML = "";

    if (input.value.trim() === "") {
      output.innerHTML = "Bitte gib eine Zahl ein";
      return;
    }

    factors.push(1);
    rechenweg = rechenweg + `${x} / 1 = ${x} <br>`;

    if (x === 1) {
      output.innerHTML = `Primfaktor von ${number} ist:  ${factors.join(" und ")} `;
      way.innerHTML = rechenweg;
      return;
    }

    while (x % 2 === 0) {
      rechenweg = rechenweg + `${x} / 2 = ${x / 2} <br>`;
      x = x / 2;
      factors.push(2);
    }

    let i = 3;
    while (i * i <= x) {
      while (x % i === 0) {
        rechenweg = rechenweg + `${x} / ${i} = ${x / i} <br>`;
        x = x / i;
        factors.push(i);
      }
      i = i + 2;
    }

    if (1 < x) {
      factors.push(x);
      rechenweg = rechenweg + `${x} / ${x} = ${x / x} <br>`;
    }

    let outtext = `Primfaktoren von ${number} sind: <br> ${factors.join(" , ")}`;
    if (factors.includes(number)) {
      outtext = outtext + "<br> damit ist es eine Primzahl!";
    }
    output.innerHTML = outtext;

    rechenweg = rechenweg + "Ende bei 1"
    way.innerHTML = rechenweg;
  });
}
