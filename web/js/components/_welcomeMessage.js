import {CreateComponent} from './_createComponent.js';

if(!localStorage.getItem('myGoals')){
  welcome();
}

function welcome() {
  
  let createComponent = new CreateComponent();

  let container  = createComponent.create({
    type:'article',
    classList:['container']
  });

  let componentStructure = `
    <div class="card welcomeMessage__card">
      <section class="card-body">
        <div class="col-12 col-md-7 me-auto px-2 px-md-5">
          <h1 class="welcomeMessage__title text-center text-md-start pt-4">
            Tu <span class="green">primer página</span>
            <span class="d-inline d-md-block">en blanco</span> 
          </h1>
          <p class="welcomeMessage__description py-2">
            ¿Estas listo para una aventura completamente nueva en donde podrás completar todas ttus metas de año nuevo, desde el primer dia de Erero hasta el ultimo de Diciembre? 
          </p>
          <section class="text-center text-md-start">
            <a class="btn mb-4 welcomeMessage__button" href="#" role="button">Comienza aqui</a>
          </section>
        </div>
      </section>
      <img src="/web/img/Journey/Saly-12.svg" alt="" class="img-fluid welcomeMessage__img">
    </div>
  `;
  let newComponente = createComponent.componentStructure({
    type:'section', 
    classList:['welcomeMessage']
  }, componentStructure);

  createComponent.append(container, newComponente);
  createComponent.render('#app', container);
}


if(document.querySelector('.welcomeMessage__button')){
 
  document.querySelector('.welcomeMessage__button').addEventListener('click', function(event){
    event.preventDefault();
    let createComponent = new CreateComponent();
    
    let componentStructure = `
      <section class="modal__content p-4">
        <div class="modal__header">
          <section class="container">
            <span class="modal__close">&times;</span>
            <h1 class="modal__title">Vamos a comenzar...</h1>
          </section>
        </div>
        <div class="modal__body py-4">
          <section class="container">
            <p class="modal__alert text-danger"></p>
            <form class="row g-3 formInital">
              <div class="col-md-6">
                <label for="name" class="form-label">Nombre *</label>
                <input type="text" class="form-control form-control-sm name" date-name="name" required placeholder="Ejemplo Juan ...">
              </div>
              <div class="col-md-6">
                <label for="picture" class="form-label">Url de imagen de perfil *</label>
                <input type="text" class="form-control form-control-sm picture" date-name="picturUrl" required placeholder="https://...">
              </div>
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
          <a class="btn modal__btnStart" data-value="all" href="#" role="button">Comenzar</a>
        </div>
      </section>
    `;

    let newComponente = createComponent.componentStructure({
      type:'article', 
      classList:['modal']
    }, componentStructure);

    createComponent.render('#app', newComponente);

    document.querySelector('.modal').style.display = "flex";

  },false);  
}

