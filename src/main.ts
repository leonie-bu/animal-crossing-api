import './style.css';
import { createElement } from './utils/createElement';

const mainElement = document.createElement('main');

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(mainElement);
}
