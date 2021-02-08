import {myGoals} from '_listGoals.js';

document.addEventListener('click', function(event) {
  event.preventDefault();
  
  if(!event.target.matches('.modal span.modal__close')) return;
  let molda = document.querySelector('.modal');
  document.querySelector('#app').removeChild(molda);
});

document.addEventListener('click', function(event){
  event.preventDefault();
  if(!event.target.matches('.modal a.modal__btnStart')) return;

  let initForm = document.querySelector('.formInital');
  let field = initForm.querySelectorAll('input, textarea');
  
  let count = 0;
  
  field.forEach(element => {
    if(element.required) {
      element.classList.remove('is-invalid');
      if(!element.value){
        element.classList.add('is-invalid');
        count++;
      }
    }
  });

  if(count > 0){
    return document.querySelector('.modal__alert')
    .innerText = 'Todos los campos * son obligatorios.';
  } 

  let myGoalsObject  = {};
  initForm.querySelectorAll('input.name, input.picture').forEach(element => {
    myGoalsObject[element.getAttribute('date-name')] = element.value;
  });
  
  let arrayGoals = [];
  let objectGoals = {};
  objectGoals['id'] = (Date.now() + Math.random()).toString(36);
  objectGoals['advance'] = 1;
  objectGoals['complete'] = false;

  initForm.querySelectorAll('input.golsTitle, textarea.descriptionGols').forEach(element => {
    objectGoals[element.getAttribute('date-name')] = element.value;
  });

  arrayGoals.push(objectGoals);
  myGoalsObject['myGoals'] = arrayGoals; 

  localStorage.setItem("myGoals", JSON.stringify(myGoalsObject));
  let molda = document.querySelector('.modal');
  document.querySelector('#app').removeChild(molda);

  myGoals(JSON.parse(localStorage.getItem("myGoals")));
},false)