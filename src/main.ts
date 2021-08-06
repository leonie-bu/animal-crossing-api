import './style.css';
import { createElement } from './utils/createElement';
import { createSeaCreatureCard } from './components/seacreatures/seacreatures';

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Animal Crossing: New Horizon',
      className: 'header',
    }),
    createElement('input', {
      placeholder: 'Find your favorite sea creature',
    }),
    createElement('div', {
      className: 'characterContainer',
      childElements: [createSeaCreatureCard()],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');
if (app !== null) {
  app.append(mainElement);
}
