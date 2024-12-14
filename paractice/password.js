let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let btn = document.getElementById("button");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});
btn.addEventListener("click", () => {
  passbox.value = generatepassword();
});
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumber = "0123456789";
let allsymbols = "~!@#$%^&*";
function generatepassword() {
  let genpass = "";
  let allchars = "";

  allchars += lowercase.checked ? lowerchars : "";
  allchars += uppercase.checked ? upperchars : "";
  allchars += number.checked ? allnumber : "";
  allchars += symbols.checked ? allsymbols : "";

  if (allchars == "" || allchars.length == 0) {
    return genpass;
  }
  let i = 1;
  while (i <= inputSlider.value) {
    genpass += allchars.charAt(Math.floor(Math.random() * allchars.length));
    i++;
  }
  return genpass;
}
