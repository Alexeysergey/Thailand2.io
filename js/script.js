new Swiper('.image-slider', {

slidesPerView: 5,
spaceBetween: 54,
loop: true,
loopedSlides: 5,
breakpoints: {
    1000: {
        slidesPerView: 5,
        spaceBetweenSlides: 50
    },

    499: {
        slidesPerView: 3,
        spaceBetweenSlides: 50
    },
    199: {
        slidesPerView: 1,
        spaceBetweenSlides: 50
    }  
    
    
}
});

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("header__burger");
    const navList = document.querySelector(".burger_menu__list");
    button.addEventListener('click', function(){
      navList.classList.toggle("active");
    });
  
    console.log(button)
    console.log(navList)
  });