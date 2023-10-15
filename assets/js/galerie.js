



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows:2 ,
    },
    centerSlide: 'true',
    grabCursor:'true',
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      spaceBetween: 20,
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView:1,
        },
        950:{
            slidesPerView:3,
        },
    }


  });

  anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 2000
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [1, 0.3],
    easing: "easeOutExpo",
    duration: 3000,
    offset: '-=0',
    delay: (el, i) => 180 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  });







  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2800,
    delay: (el, i) => 15 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 2800,
    easing: "easeOutExpo",
    delay: 15
  });


  



 