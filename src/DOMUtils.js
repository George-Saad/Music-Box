import { INACTIVE_CLASS } from "./constants.js";

export default class DOMUtils {
  
  clearDOMElement = (DOMElement) => {
    DOMElement.innerHTML = '';
  };

  createDOMElement = (tag, options) => {
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
  
  getDOMElement = (id) => {
    return document.getElementById(id);
  };

  hideDOMElement = (element) => {
    element.classList.add(INACTIVE_CLASS);
  }

  showDOMElement = (element) => {
    element.classList.remove(INACTIVE_CLASS);
  }
}
