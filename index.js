const colorBtn = document.getElementById("color-select-button");
const selectBtn = document.getElementById("select-button");
const buttonGeneratorBtn = document.getElementById("button-generator");
const firstColor = document.getElementById("first-color");
const secondColor = document.getElementById("second-color");
const thirdColor = document.getElementById("third-color");
const fourthColor = document.getElementById("fourth-color");
const fifthColor = document.getElementById("fifth-color");
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
      let colorData = data.colors;
      let colorstrings = ``;

      for (let i = 0; i < colorData.length; i++) {
        colorstrings += `<div class="color" style="background-color: ${colorData[i].hex.value};"></div>`;
      }
      console.log(colorstrings);
      resultColor.innerHTML = colorstrings;
      
    });

  // let colorpallete = "";
  // for (let i = 0; i < event.length; i++) {
  //   colorpallete += `
  //       <div style="background-color:"></div>
  //     `;
  // }
  // resultColor.innerHtml = colorpallete;
});
