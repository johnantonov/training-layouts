
window.addEventListener('DOMContentLoaded', function () {

    // HEADER SERCHING FORM 

    document.querySelector('.header__search').addEventListener('click', function () {
        document.querySelector('.form_no-active').classList.toggle('form_is-active')
    })

    document.querySelector('.header__search').addEventListener('click', function () {
        document.querySelector('.header__stop-search_no-active').classList.toggle('header__stop-search_is-active')
    })

    document.querySelector('.header__stop-search_no-active').addEventListener('click', function () {
        document.querySelector('.form_is-active').classList.toggle('form_is-active')
        document.querySelector('.header__stop-search_is-active').classList.toggle('header__stop-search_is-active')
    })

    // TABS 

    document.querySelectorAll('.how__step').forEach(function(step) {
        step.addEventListener('click', function(e) {
            tab = e.currentTarget.dataset.tab

            document.querySelectorAll('.how__info').forEach(function(step) {
                step.classList.remove('how_active')
            })

            document.querySelectorAll('.how__right').forEach(function(step) {
                step.classList.remove('how_active')
            })

            document.querySelector(`[data-div='${tab}']`).classList.add('how_active')
            document.querySelector(`[data-img='${tab}']`).classList.add('how_active')
            

        })
    })

    // BURGER MENU


    
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  $(document).ready(function(){
    $('.accordion__btn').on('click', function(e) {
      $(`#text_${e.target.id}`).toggle('accordion__text_hidden') // текст +
      $(`.btn__img_close_${e.target.id}`).toggle('accordion__text_hidden') // x +
      $(`.btn__img_${e.target.id}`).toggle('accordion__text_hidden') // + -
    })

  })
   


   



   
