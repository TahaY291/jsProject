let boxes = document.querySelector(".container").children
// let box = document.querySelector(".box_line3")
function bgcolor() {
    let val1 = Math.floor(0 + Math.random()* 100)
    let val2 = Math.floor(0 + Math.random()* 100)
    let val3 = Math.floor(0 + Math.random()* 100)
    return  `rgb(${val1}, ${val2}, ${val3})`
    
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = bgcolor();
})
// Array.from(box).forEach(e=>{
//     e.style.backgroundColor = bgcolor();
// })