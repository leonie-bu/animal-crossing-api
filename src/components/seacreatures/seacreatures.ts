import { createElement } from '../../utils/createElement';
import styles from './seacreatures.module.css';

export function createSeaCreatureCard(): HTMLElement {
  return createElement('div', {
    className: styles.card,
    childElements: [
      createElement('h3', {
        innerText: 'Seaweed',
        className: 'seaCreature__name',
      }),
      createElement('img', {
        className: styles.image,
        src: 'https://acnhapi.com/v1/images/sea/1',
        alt: 'The icon of the sea creature',
      }),
      createElement('p', {
        className: styles.price,
        innerText: 'Pay ' + '600' + ' for me',
      }),
      createElement('p', {
        className: styles.catchphrase,
        innerText: 'I got some seaweed! I could not kelp myself.',
      }),
    ],
  });
}
