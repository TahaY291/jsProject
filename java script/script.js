console.log("taha")
setTimeout(()=>{
    console.log("Hi here is i am")
}, 0)
console.log("Talha")
const fn = () => {
  console.log("Taha Majeed is a good Man")
}

const callback = (arg, fn) => {
  console.log(arg)
  console.log("Taha")
  fn()
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Harry", fn);
    // sc.onload = callback(new Error ('failed'));
    document.head.append(sc);
  
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
