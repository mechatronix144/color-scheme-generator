const colorBtn = document.getElementById("color-select-button");
const selectBtn = document.getElementById("select-button");
const buttonGeneratorBtn = document.getElementById("button-generator");
const colorCodeContainer = document.getElementById("color-code-container");
const resultColor = document.getElementById("result-color");

buttonGeneratorBtn.addEventListener("click", function (event) {
  let colorSelector = colorBtn.value.slice(1);
  let selectSelector = selectBtn.value;
  console.log(colorSelector);
  console.log(selectSelector);
  let url = `https://www.thecolorapi.com/scheme?hex=${colorSelector}&mode=${selectSelector}&count=5`;
  console.log(url);
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let colorData = data.colors;
      let colorstrings = ``;
      let colorCodeStr = ``;

      for (let i = 0; i < colorData.length; i++) {
        colorstrings += `<div class="color" style="background-color: ${colorData[i].hex.value};"></div>`;
        colorCodeStr += `<div>${colorData[i].hex.value}</div>`;
      }
      colorCodeContainer.innerHTML = colorCodeStr;
      resultColor.innerHTML = colorstrings;
    });
});
