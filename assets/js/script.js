


// window.addEventListener('scroll', function () {
//   const scrollValue = window.scrollY;
//   const image2 = document.querySelector('.image-2');

//   // Ajustez la valeur 2 selon votre besoin pour contrôler la vitesse de l'effet parallax.
//   image2.style.transform = `translateX(${scrollValue / 2}px)`;
// });

window.addEventListener('scroll', function () {
  const scrollValue = window.scrollY;
  const parallaxTrigger = 900; // Détermine quand arrêter l'effet de parallaxe


  if (scrollValue <= parallaxTrigger) {
    const image1 = document.querySelector('.image-1');
    const image2 = document.querySelector('.image-2');
    const parallaxValue = scrollValue / 2;
  
  // Appliquez la translation aux deux images en direction opposée
  image1.style.transform = `translateX(-${parallaxValue}px) rotate(90deg)`;
  image2.style.transform = `translateX(${parallaxValue}px) rotate(90deg)`;
  }


  
});







