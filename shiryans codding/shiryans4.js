var crsr = document.getElementById('cursor')
var crsrbg = document.getElementById('cursor-blur')
document.addEventListener('mousemove', (e)=>{
    crsr.style.left = e.clientX + "px";
    crsr.style.top = e.clientY + "px";
    crsrbg.style.left = e.clientX - 200 + "px"
    crsrbg.style.top = e.clientY - 200 + "px"

})

let navh4 = document.querySelectorAll('#nav h4')
navh4.forEach(elem=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent";
    })
    
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #fff"
        crsr.style.backgroundColor = "#95C11E";
    })

    
})
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 1,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start:"top -25%",
        end: "top -70%",
        scrub:2

    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start: "top 70%",
        end: 'top 65%',
        scrub: 3
    }


})
gsap.from(".card",{
    scale: 0.8,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        start: "top 70%",
        end: 'top 65%',
        scrub: 2
    }


})
gsap.from("#colon1",{
    y:-50,
    x:-50,
    // duration: 2,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        start: "top 50%",
        end: 'top 45%',
        scrub: 4
    }


})
gsap.from("#colon2",{
    y:70,
    x:70,
    // duration: 2,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        start: "top 55%",
        end: 'top 45%',
        scrub: 4
    }


})
gsap.from("#page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: 'top 70%',
        scrub: 2    
    }
})