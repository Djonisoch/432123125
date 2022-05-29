//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100){
//         $('header').addClass("header__filled"); 
//          }
//         else{
//         $('header').removeClass("header__filled");         
//       } 
// });


const header = document.querySelector(".header");
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY;

  if(scrollPos > 10) {
    header.classList.add("header__filled"); 
  }
 else{
  header.classList.remove("header__filled");
    }      
}

// clearjs
// document.querySelectorAll('a[href^="#"').forEach(link => {

//   link.addEventListener('click', function(e) {
//       e.preventDefault();
//       let href = this.getAttribute('href').substring(1);
//       const scrollTarget = document.getElementById(href);
//       const topOffset = document.querySelector('.header').offsetHeight;
//       // const topOffset = 0; // если не нужен отступ сверху 
//       const elementPosition = scrollTarget.getBoundingClientRect().top;
//       const offsetPosition = elementPosition - topOffset;
//       window.scrollBy({
//           top: offsetPosition,
//           behavior: 'smooth'
//       });
//   });
// });

  ;(function() {
    $(document).ready(function() {
      var headerOffset = document.querySelector(".header").clientHeight;
      $("a.scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - headerOffset}, 400);
        return false;
      });
    });
  })();

  ;(function() {
    let sections = $('section'), 
    nav = $('nav'), 
    nav_height = nav.outerHeight();
    $(window).on('scroll', function () {
        $('nav a').removeClass('active');
        let cur_pos = $(this).scrollTop(); 
        sections.each(function() {
            let top = $(this).offset().top - nav_height - 220,
            bottom = top + $(this).outerHeight();       
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');    
                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
  })();

  
  (function() {
   
    'use strict';
   
    $('.input-file').each(function() {
      var $input = $(this),
          $label = $input.next('.js-labelFile'),
          labelVal = $label.html();
       
     $input.on('change', function(element) {
        var fileName = '';
        if (element.target.value) fileName = element.target.value.split('\\').pop();
        fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
     });
    });
   
  })();

  (function() {
    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#header__popup");
    const menu = document.querySelector("#menu").cloneNode(1);
    const body = document.body;
     
    hamb.addEventListener("click", hambHandler);
 
// Выполняем действия при клике ..
    function hambHandler(e) {
      e.preventDefault();
      // Переключаем стили элементов при клике
      popup.classList.toggle("open");
      hamb.classList.toggle("active");
      body.classList.toggle("noscroll");
      renderPopup();
    } 
    function renderPopup() {
      popup.appendChild(menu);
    }
        // Код для закрытия меню при нажатии на ссылку
    const links = Array.from(menu.children);

    // Для каждого элемента меню при клике вызываем ф-ию
    links.forEach((link) => {
      link.addEventListener("click", closeOnClick);
    });

    // Закрытие попапа при клике на меню
    function closeOnClick() {
      popup.classList.remove("open");
      hamb.classList.remove("active");
      body.classList.remove("noscroll");
    }
})();