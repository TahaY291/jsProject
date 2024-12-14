const menutoggle = document.querySelector('.menu-toggle');
const nav  = document.querySelector('nav');

menutoggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
});

const modetoggle = document.querySelector('.mode-toggle');
const body = document.querySelector('body');
modetoggle.addEventListener('click',() => {
    body.classList.toggle('.light-mode')
})


