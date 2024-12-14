// let bd = document.getElementById('body');
// document.addEventListener('mousemove', (event)=>{
//     let xpos = event.offsetX;
//     let ypos = event.offsetY;
//     let img = document.createElement('img'); // Create an image element instead of a span
//     img.src = "https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/663f2f66c6546b588a916dcc_icon.png";
//     img.style.width = "20px";
//     img.style.height = "20px";
//     img.style.position = "absolute"; // Position it absolutely
//     img.style.left = xpos + "px";
//     img.style.top = ypos + "px";
//     img.style.pointerEvents = "none";

//     bd.appendChild(img);
//     setTimeout(() => {
//         img.remove()        
//     }, 10);
// })

const light = document.getElementById('light');

        document.addEventListener('mousemove', (event) => {
            light.style.left = `${event.pageX}px`;
            light.style.top = `${event.pageY}px`;
});