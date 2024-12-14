const bd = document.querySelector("body")

bd.addEventListener("mousemove", (event)=>{
    let xpos = event.offsetX;
    let ypos = event.offsetY;
    const spanel = document.createElement("span")
    // const divel = document.createElement("div")
    // divel.style.left = xpos + "px"
    // divel.style.top = ypos + "px"
    spanel.style.left = xpos + "px";
    spanel.style.top = ypos + "px";
    // spanel.innerText = " Maham "
    // bd.appendChild(divel)
    // spanel.src = 'tik.svg'
    bd.appendChild(spanel)

    const size = Math.random()*100;
    spanel.style.width = size + "px";
    spanel.style.height = size + "px";
    // divel.style.width = size + "px";
    // divel.style.height = size + "px";
    setTimeout(() => {
        spanel.remove()
        // divel.remove()
    }, 3000);
})