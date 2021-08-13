

const menuOpen=document.querySelector('.header__button-menu');
const menuClose=document.querySelector('.menu__button--closed');
const menu=document.querySelector('.menu');
let header=document.querySelector('.header');

if(header==null){
    header=document.querySelector('.header-detail');
}

menuOpen.addEventListener("click", function(evt){

    // menu.classList.add('menu--show');
    menu.style.left='0%';
    header.style.display='none';

});

menuClose.addEventListener("click", function(evt){
    // menu.classList.remove('menu--show');
    menu.style.left='-150%';
    header.style.display='flex';
});



