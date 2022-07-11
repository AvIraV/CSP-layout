/*new Swiper('.swiper-container', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
       el: '.swiper-pagination',
       clickable: true, 
    },

    slidesPerView: 'auto',
    
});
*/





let width = window.matchMedia('(max-width: 767px)');

window.addEventListener('resize', () => {
  if (width.matches) {
    let newSwiper = new Swiper('.swiper-container', {

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  
      pagination: {
         el: '.swiper-pagination',
         clickable: true, 
      },
  
      slidesPerView: 'auto',
      
  });
  
  } else {
    
 newSwiper.remove('.swiper-container');
  }
})













const btn = document.querySelector(".brands__show-btn-action");
const content = document.getElementsByClassName("brands__section--hidden");

btn.addEventListener("click", function () {

  console.log(content.classList);

  if (content.classList.contains("hidden")) {
      btn.textContent = "Скрыть";
  } else {
      btn.textContent = "Показать все";
  }

  content.classList.toggle("hidden");

});







