burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
rightnav=document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle("vclass")
    navlist.classList.toggle("vclass")
    navbar.classList.toggle("hnav")
})