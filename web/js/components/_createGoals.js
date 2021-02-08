class GoalsElements {

  filter(filter = 'all', array = []) {
    try {      
      
      if(filter == 'all') return array;
      
      let newArray = array.filter( function (item) {
        return filter == 'complete' ?  item.complete :  !item.complete;
      });
      
      return  newArray;

    } catch (error) {
      console.warn(`Exception in filter() => ${error}`);
    }
  }

  list(array = []) {
    try {
      let groupString = '';

      array.forEach(element => {
        groupString+=`
        <section class="col-12 goals__item">
          <div class="card">
            <section class="card-body px-5">
              <h3 class="title pt-4"><span class="title__green">Meta: </span> ${element.title}</h3>
              <p class="description">${element.description}</p>
              
              <div class="row">
                <section class="col-md-6">
                  <p class="message">Conoce tu progreso.</p>
                </section>
                <section class="col-md-6">
                  <div class="text-end">
                    <a class="btn btn__plus ${element.advance < 10 ? 'd-inline': 'd-none'}" data-id="${element.id}" data-value="all" href="#" role="button">+10</a>
                  </div>
                </section>
              </div>

              <ul class="progressGols pt-3">
                <li class="progressGols__item active py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                  <span class="block py-3">Inicio</span>
                </li>
        `;
        
        for (let i = 1; i <= element.advance; i++) {
          if(i != 10 ){
            groupString+=`
            <li class="progressGols__item active py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
            </svg>
            <span class="block py-3">${i*10}%</span>
            </li>`;
          }
        }

        groupString+= `
                <li class="py-3 progressGols__item ${element.advance == 10 ? 'active': ''} py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                  </svg>
                  <span class="block py-3">Meta</span>
                </li>
              </ul>
              <section class="text-end d-flex justify-content-between">
                <a class="btn btn__complete ${element.advance < 10 ? 'd-inline': 'd-none'}" href="#" data-id="${element.id}" role="button">Finalizar</a>
                <a class="btn btn__delete" href="#" data-id="${element.id}" role="button">Eliminar</a>
              </section>
            </section>
          </div>
        </section>`
      });

      return groupString;
    } catch (error) {
      console.warn(`Exception in list() => ${error}`);
    }
  }
}

export {GoalsElements};