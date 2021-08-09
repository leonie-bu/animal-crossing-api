import { createElement } from '../../utils/createElement';
import styles from './seacreatures.module.css';
import { SeaCreatureCharacter } from '../../types';

export function createSeaCreatureCard({
  name,
  thumbnail,
  price,
  catchphrase,
}: SeaCreatureCharacter): HTMLElement {
  return createElement('div', {
    className: styles.card,
    childElements: [
      createElement('h3', {
        innerText: name,
        className: styles.name,
      }),
      createElement('img', {
        className: styles.image,
        src: thumbnail,
        alt: 'The icon of the sea creature',
      }),
      createElement('p', {
        className: styles.price,
        innerText: `Get ${price} for me`,
      }),
      createElement('p', {
        className: styles.catchphrase,
        innerText: catchphrase,
      }),
    ],
  });
}
