import { createElement } from '../../utils/createElement';

export function createSeaCreatureCard(): HTMLElement {
  return createElement('div', {
    className: 'seaCreature-card',
    childElements: [
      createElement('h3', {
        innerText: 'Seaweed',
        className: 'seaCreature__name',
      }),
      createElement('img', {
        className: 'seaCreature__image',
        src: 'https://acnhapi.com/v1/images/sea/1',
        alt: 'The icon of the sea creature',
      }),
      createElement('p', {
        className: 'seaCreature__price',
        innerText: 'Pay ' + '600' + ' for me',
      }),
      createElement('p', {
        className: 'seaCreature__catchphrase',
        innerText: 'I got some seaweed! I could not kelp myself.',
      }),
    ],
  });
}
