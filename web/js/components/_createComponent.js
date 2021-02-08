class CreateComponent {


  create(element = {}) {
    try {
      if(Object.entries(element).length === 0) return console
        .warn('Exception in create() => object parameter is empty.');

      let newElement = document.createElement(element.type);
      newElement.classList.add(...element.classList);
      
      return newElement;

    } catch (error) {
      console.warn(`Exception in create() => ${error}`);
    }
  }
  
  render(elementParent = '', element = '') {
    try {
      if(!elementParent || !element) return console
        .warn('Exception in render() => unable to render empty parameters');

      return document.querySelector(elementParent).appendChild(element);

    } catch (error) {
      console.warn(`Exception in render() => ${error}`);
    }
  }

  append(elementParent = '', elementChild = ''){
    try {
      if(!elementParent || !elementChild ) console
      .warn('Exception in append() => unable to render empty parameters');
      elementParent.appendChild(elementChild);
      return elementParent;
    } catch (error) {
      console.warn(`Exception in append() => ${error}`);
    }
  }

  componentStructure(elementParent = {} , myElement = '') {
    try {
      let newElement = this.create(elementParent);
      newElement.innerHTML = myElement;
      return newElement;
    } catch (error) {
      console.warn(`Exception in componentStructure() => ${error}`);
    }
  }


}

export { CreateComponent }; 