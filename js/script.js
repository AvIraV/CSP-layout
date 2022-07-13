function myFunction() {
    var dots = document.querySelector(".services__read-more__dots");
    var moreText = document.querySelector(".services__read-more");
    var btnText = document.querySelector(".services__read-more-btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читать больше";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Скрыть";
      moreText.style.display = "inline";
    }
  }
  