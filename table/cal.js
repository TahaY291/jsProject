let btn = document.querySelectorAll(".btn");
let input = document.getElementById("output");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let back = document.getElementById("back");

btn.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.textContent !== "=" && e.textContent !== "clear" && e.textContent != "back" ) {
      input.value += e.textContent;
    }
  });
});
equal.addEventListener("click", (e) => {
  if (input.value !== "") {
    input.value = eval(input.value);
  }
});
clear.addEventListener("click", (e) => {
  if (input.value !== "") {
    input.value = "";
  }
});
back.addEventListener('click',(e)=>{
    if (input.value !== "") {
        input.value = input.value.substr(0, input.value.length - 1)
    }
})
