import './style.css';
import { createElement } from './utils/createElement';

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Animal Crossing: New Horizon',
      className: 'header',
    }),
    createElement('input', {
      placeholder: 'Find your favorite sea creature',
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');
if (app !== null) {
  app.append(mainElement);
}
