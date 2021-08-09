import './style.css';
import { createElement } from './utils/createElement';
import { createSeaCreatureCard } from './components/seacreatures/seacreatures';
import { getSeaCreature } from './utils/api';
import { searchSeaCreature } from './utils/api';
import { SeaCreatureCharacter } from './types';

const allSeaCreatures: SeaCreatureCharacter[] = await getSeaCreature();

const seaCreatureContainer = createElement('div', {
  className: 'seaCreature__container',
  childElements: allSeaCreatures.map((seacreatures) =>
    createSeaCreatureCard(seacreatures)
  ),
});

const searchBar = createElement('input', {
  className: 'searchBar',
  placeholder: 'Search for a creature in the sea',
});

searchBar.oninput = () => {
  const name = searchBar.value;
  const seaCreatures: SeaCreatureCharacter[] = searchSeaCreature(
    allSeaCreatures,
    name
  );

  seaCreatureContainer.innerHTML = '';

  const filteredSeaCreatureElements = seaCreatures.map((seaCreature) =>
    createSeaCreatureCard(seaCreature)
  );

  seaCreatureContainer.append(...filteredSeaCreatureElements);
};

const mainElement = createElement('main', {
  className: 'container',
  childElements: [
    createElement('h1', {
      innerText: 'Animal Crossing: New Horizons',
      className: 'heading',
    }),
    searchBar,
    seaCreatureContainer,
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');
if (app !== null) {
  app.append(mainElement);
}
