const colorInput = document.getElementById("colorInput");
const changeButton = document.getElementById("changeButton");
const colorBox = document.getElementById("colorBox");
const changeBox = document.getElementById("changeBox");


colorInput.addEventListener("input", (event) => {
  colorBox.style.backgroundColor = event.target.value;
});


changeButton.addEventListener("click", () => {
  changeBox.style.backgroundColor = colorBox.style.backgroundColor;
});


