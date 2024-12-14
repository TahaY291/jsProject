let myleads = []

const inputEl = document.getElementById('input-el')
const inputbtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');

inputbtn.addEventListener('click',()=>{
    myleads.push(inputEl.value)
    console.log(myleads);
    render();
    inputEl.value = " "
    // inputEl.value = "";
})
function render() {
    let listitems = "";
    for (let i = 0; i < myleads.length; i++) {
        listitems += `<li><a href=' ${myleads[i] }' target='blank' >${myleads[i]}</a></li>` 
        console.log(listitems);   
    }
    ulEl.innerHTML =   listitems ;
}
function save() {
    localStorage.
}