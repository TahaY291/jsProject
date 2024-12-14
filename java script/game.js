let boxes = document.querySelectorAll(".box")
let msg = document.querySelector(".winner")
let rm = document.querySelector(".remove")
let resetbtn = document.querySelector("#rg_btn")

let turnO = true;
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
]



boxes .forEach(box => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();


    })
});
function disabledbtn() {
    for (let box of boxes) {
        box.disabled = true;
        box.innerText= "";
        
    }
    
}
function winneris(val) {
    msg.innerText = `The winner is ${val} `
    rm.classList.remove("hide")
    disabledbtn();
}
function checkwinner() {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner")
                turnO = false;
                winneris(pos2val);
                
                
            }
        }
        
    }
    
}
