let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
    shopingCart.classList.remove('active');
} 

let shopingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shopingCart.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    
} 


let loginForm=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
} 



let navBar=document.querySelector('.navbar');

document.querySelector('#menue-btn').onclick = () =>{
navBar.classList.toggle('active');
searchForm.classList.remove('active');
loginForm.classList.remove('active');
shopingCart.classList.remove('active');
} 
window.onscroll = () =>{
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shopingCart.classList.remove('active');

    } 


    var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});