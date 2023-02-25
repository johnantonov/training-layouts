const element = document.querySelector('#selCustom');
const choices = new Choices(element, {
    searchEnabled: false,
});

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [48.872185, 2.354224],
        zoom: 7
    });
}




let selector = document.querySelector('#tel');

let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);




const validation = new JustValidate('#valid-form');

validation
  .addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
      },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Количество символов 3-30',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Количество символов 3-30',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели почту',
    },
    {
      rule: 'email',
      errorMessage: 'Почта указана неверно',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
  ])

  



  tippy('#myButton', {
    content: 'tooltip by tippy.js',
  });

