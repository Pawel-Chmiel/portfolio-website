const header = document.querySelector('.header');
let lastKnownScrollPositionY = 0;


window.addEventListener('scroll', function () {
   lastKnownScrollPositionY = window.scrollY;
      if (window.scrollY !==0) {
        header.classList.add('header--scroll');
      } else{
        header.classList.remove('header--scroll');
      }
})