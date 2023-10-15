


(function(){

    var button = document.getElementById('cn-button'),
      wrapper = document.getElementById('cn-wrapper');
  
      //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);
    button.addEventListener('focus', handler, false);
  
    function handler(){
      if(!open){
        this.innerHTML = "Close";
        classie.add(wrapper, 'opened-nav');
      }
      else{
        this.innerHTML = "Menu";
      classie.remove(wrapper, 'opened-nav');
      }
      open = !open;
    }
    function closeWrapper(){
      classie.remove(wrapper, 'opened-nav');
    }
  
  })();






    var swiper = new Swiper(".mySwiper", {
      speed: 800,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


  

  






var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
   

});


           





const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener('load', executeCodes);



$("#cookie-popup button").click(function() {
  $("#cookie-popup").fadeOut();
});