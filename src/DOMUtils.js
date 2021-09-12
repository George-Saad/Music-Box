'use strict';

 const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};

 const createDOMElement = (tag, options) => {
  const { id } = options || {};
  const { className } = options || {};

  const element = document.createElement(tag);

  if (id != null) {
    element.id = id;
  }
  
  if (className != null) {
    element.classList.add(className);
  }

  return element;
};

 const getDOMElement = (id) => {
  return document.getElementById(id);
};

// show(container){
//   this.container.classList.remove("inactive");
// }

// hide(){
//   this.container.classList.add('inactive');
// }

