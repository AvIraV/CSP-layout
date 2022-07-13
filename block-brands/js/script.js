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



/*

let width = window.matchMedia('(max-width: 767px)');
var swiper = document.querySelector('.swiper-container').swiper;


window.addEventListener('resize', () => {
  if (width.matches) {
    swiper = new Swiper('.swiper-container', {

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
swiper.destroy(true, true);
  }
});


*/
    

window.onload =  () => {  // ожидаем загрузку окна браузера
  if (window.matchMedia('(max-width: 767px)').matches) { // // свайпер у нас будет работать, если разрешение эерана не превышает 767px
    const swiper = new Swiper('.swiper-container', {  // инициализируем новый Swiper
      direction: 'horizontal', // устанавливаем напрвление Swiper
      loop: true,  // делаем Swiper зацикленным (Swiper самостоятельно добавит слайды в начало и конец .swiper-wrapper для создания иллюзии "бесконечности" слайдов)
      spaceBetween: 20, // отступ между слайдами в px
      slidesPerView: 'auto', // позволит устанавливать произвольную ширину слайдов, в противном случае - растянет на ширину контейнера .swiper-wrapper
      pagination: { // подключаем пагинацию
        el: '.swiper-pagination', // контейнер для пагинации
        clickable: true // добавляем параметр, если хотим сделать bullets кликабельными
      },
      init: true
    });
  } 
};







document.addEventListener("DOMContentLoaded", hiddenCloseclick());

function hiddenCloseclick() {
  let btn = document.querySelector('.brands__show-btn-action');
  btn.addEventListener("click", hiddenCloseclick);
  let content = document.getElementsByClassName('brands__section--hidden');
  let contentShowDesctop = document.getElementsByClassName('brands__section--show-desctop');
  //let contentText = document.getElementsByClassName('brands__section__item');

  for(let i = 0; i < content.length; i++) {
    if (content[i].style.display === "none"){
      content[i].style.display = "block";
      btn.innerHTML = 'Скрыть';
      } else {
      content[i].style.display = "none";
      btn.innerHTML = 'Показать все';
    }
  }
 
  for (let i = 0; i < contentShowDesctop.length; i++) {
    if (window.innerWidth > 1119) {
      contentShowDesctop[i].style.display = "block";
    }
  }
  
  }

