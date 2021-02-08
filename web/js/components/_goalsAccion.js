import {myGoals} from './_listGoals.js';
import {CreateComponent} from './_createComponent.js';

try {
  document.addEventListener('click', function(event){
    event.preventDefault();
    if(!event.target.matches('.goals__item a.btn__complete')) return;

    let id = event.target.getAttribute('data-id');
    let goalsActive = JSON.parse(localStorage.getItem("myGoals"));
    
    let indiceGoals = goalsActive.myGoals.findIndex(item => item.id === id);

    if(indiceGoals == -1) return console.warn('Exception in compleGoals => non-existent element');
    goalsActive.myGoals[indiceGoals].advance = 100;
    goalsActive.myGoals[indiceGoals].complete = true;
    localStorage.setItem("myGoals", JSON.stringify(goalsActive));
    myGoals(goalsActive);
  });
} catch (error) {
  console.warn(`Exception in complete() => ${error}`);
}


try {
  document.addEventListener('click', function(event){
    event.preventDefault();
    if(!event.target.matches('.goals__item a.btn__delete')) return;

    let id = event.target.getAttribute('data-id');
    let goalsActive = JSON.parse(localStorage.getItem("myGoals"));
  
    let newArray = goalsActive.myGoals.filter(item => item.id != id);
    goalsActive['myGoals'] = newArray; 
    localStorage.setItem("myGoals", JSON.stringify(goalsActive));
    myGoals(goalsActive);
  });
} catch (error) {
  console.warn(`Exception in delete() => ${error}`);
}

try {
  document.addEventListener('click', function(event){
    event.preventDefault();
    if(!event.target.matches('.bodyCard__sidebar a.btn__newGolas, .bodyCard__sidebar span')) return;

    let createComponent = new CreateComponent();
    
    let componentStructure = `
      <section class="modal__content p-4">
        <div class="modal__header">
          <section class="container">
            <span class="modal__close">&times;</span>
            <h1 class="modal__title">Crea una nueva meta...</h1>
          </section>
        </div>
        <div class="modal__body py-4">
          <section class="container">
            <p class="modal__alert text-danger"></p>
            <form class="row g-3 formNewGoals">
              <div class="col-md-6">
                <label for="metaTitle" class="form-label">Título de tu meta *</label>
                <input type="text" class="form-control form-control-sm golsTitle" required  date-name="title" placeholder="Hacer ...">
              </div>
              <div class="col-12">
                <label for="descriptionGols" class="form-label">Descripción *</label>
                <textarea class="form-control descriptionGols" rows="3" date-name="description" required placeholder="Debo hacer ..."></textarea>
              </div>
            </form>
          </section>
        </div>
        <div class="modal__footer">
          <a class="btn modal__btnsaveGoals" data-value="all" href="#" role="button">Agregar Meta</a>
        </div>
      </section>
    `;

    let newComponente = createComponent.componentStructure({
      type:'article', 
      classList:['modal', 'modalWhite']
    }, componentStructure);

    createComponent.render('#app', newComponente);

    document.querySelector('.modal').style.display = "flex";


  });
} catch (error) {
  console.warn(`Exception in create() => ${error}`);
}

try {
  document.addEventListener('click', function(event){
    event.preventDefault();
    if(!event.target.matches('.modal__content a.modal__btnsaveGoals')) return;

    let formNewGoal = document.querySelector('.formNewGoals');
    let field = formNewGoal.querySelectorAll('input, textarea');
  
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

    let objectGoals = {};
    objectGoals['id'] = (Date.now() + Math.random()).toString(36);
    objectGoals['advance'] = 1;
    objectGoals['complete'] = false;
  
    field.forEach(element => {
      objectGoals[element.getAttribute('date-name')] = element.value;
    });

    let goalsActive = JSON.parse(localStorage.getItem("myGoals"));
    
    goalsActive.myGoals.push(objectGoals);
  
    localStorage.setItem("myGoals", JSON.stringify(goalsActive));
    let molda = document.querySelector('.modal');
    document.querySelector('#app').removeChild(molda);
  
    myGoals(goalsActive);
  });
} catch (error) {
  console.warn(`Exception in newGolas() => ${error}`);
}


try {
  document.addEventListener('click', function(event){
    event.preventDefault();
    if(!event.target.matches('.goals__item a.btn__plus')) return;
    let id = event.target.getAttribute('data-id');
    let goalsActive = JSON.parse(localStorage.getItem("myGoals"));
    let indiceGoals = goalsActive.myGoals.findIndex(item => item.id === id);

    if(indiceGoals == -1) return console.warn('Exception in updateGoals => non-existent element');
    
    console.log(goalsActive.myGoals[indiceGoals].advance);
    
    if(goalsActive.myGoals[indiceGoals].advance > 8){
      goalsActive.myGoals[indiceGoals].complete = true;
    }
    goalsActive.myGoals[indiceGoals].advance += 1;

    localStorage.setItem("myGoals", JSON.stringify(goalsActive));
    myGoals(goalsActive);

  });
} catch (error) {
  console.warn(`Exception in newGolas() => ${error}`);
}