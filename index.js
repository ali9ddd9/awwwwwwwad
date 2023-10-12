let nav = document.querySelector('.list-iteams');
let menu = document.getElementById('menu');
let cross = document.getElementById('cross');
menu.addEventListener('click', (()=>{
    nav.style.transform =   'translateX(0)';
    cross.style.display = 'block';
    menu.style.display= 'none';
}))

cross.addEventListener('click', (()=>{
    nav.style.transform =   'translateX(100%)';
    menu.style.display = 'block';
    cross.style.display= 'none';
}))