import {CreateComponent} from './_createComponent.js';
import {GoalsElements} from './_createGoals.js';



if(localStorage.getItem('myGoals')) {
  myGoals(JSON.parse(localStorage.getItem("myGoals")));
}

function myGoals(myGoals) {

  document.querySelector('#app').innerHTML = '';

  let createComponent = new CreateComponent();

  let container  = createComponent.create({
    type:'article',
    classList:['container']
  });

  let componentStructure = `
    <div class="bodyCard__card">
      <section class="row">
        <div class="col-12 col-md-3 bodyCard__sidebar">
          <section class="card-body">
            <div class="bodyCard__profile text-center">
              <section class="bodyCard__profile--photo mx-auto mt-4">
                <img src="${myGoals.picturUrl}" alt="picture" class="img-fluid">
              </section>
              <p class="mb-0 py-2 bodyCard__name">${myGoals.name}</p>
              <p class="py-3 bodyCard__infoText">Toda tu información</p>
              <a class="btn d-block bodyCard__goals btn__newGolas" href="#" role="button"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                </svg> 
                <span class="ms-2">Agregar nueva</span>
              </a>
            </div>
          </section>
        </div>
        <div class="col-12 col-md-9">
          <section class="card-body bodyCard__content">
            <div class="container">
              <h2 class="pt-3 title"><span class="title__green">Metas</span> disponibles</h2>
              <p class="message">¿Estás preparado para cumplir todo lo que te propongas?</p>
              <section class="col-12 col-md-8 py-3 d-flex justify-content-around listCategoryButton">
                <a class="btn d-block categoryButton active" data-value="all" href="#" role="button">Todas</a>
                <a class="btn d-block categoryButton" href="#" data-value="complete" role="button"> Completadas</a>
                <a class="btn d-block categoryButton" href="#" data-value="incomplete" role="button"> En proceso</a>
              </section>
              <section class="col-12 py-4">
                <div class="row gy-4 listGoals"><div>
              <section>
            <div>
          </section>
        </div>
      </section>
    </div>   
  `;
  
  let newComponente = createComponent.componentStructure({
    type:'section', 
    classList:['bodyCard']
  }, componentStructure);

  createComponent.append(container, newComponente);
  createComponent.render('#app', container);

  let card = new GoalsElements();
  let responseArray = card.filter('all', myGoals.myGoals);
  let response = card.list(responseArray);
  document.querySelector('.listGoals').innerHTML = response;
}

export {myGoals};