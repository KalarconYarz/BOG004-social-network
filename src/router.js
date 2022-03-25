// importamos el componente de las vistas
import { components } from './index.js';

// funcion de condicion de cambio de rutas
const changeView = (route, component = components) => {
  const hash = route.split('/')[1];
  const sectionHTML = document.querySelector('#routers-container');
  sectionHTML.innerHTML = '';
  switch (route) {
    case '':
    case ' ':
    case '#':
    case '#/':
    { return sectionHTML.appendChild(component.login()); }
    case '#/signup':
    case '#/wall':
    { return sectionHTML.appendChild(component[hash]()); }
    default:
      return sectionHTML.appendChild(component.error404());
  }
};

export { changeView };
