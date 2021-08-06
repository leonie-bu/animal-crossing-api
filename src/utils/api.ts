import { SeaCreatureCharacter, AllSeaCreaturesFromAPI } from '../types';

export async function getSeaCreature(): Promise<SeaCreatureCharacter[]> {
  const response = await fetch(`https://acnhapi.com/v1/sea/?name=`);

  const data: AllSeaCreaturesFromAPI = await response.json();
  const seacreatures = Object.values(data);
  const formattedSeaCreatures: SeaCreatureCharacter[] = seacreatures.map(
    (seacreatures) => {
      const formattedSeaCreature: SeaCreatureCharacter = {
        name: seacreatures.name['name-EUen'],
        thumbnail: seacreatures.image_uri,
        price: seacreatures.price,
        catchphrase: seacreatures['catch-phrase'],
      };
      return formattedSeaCreature;
    }
  );
  return formattedSeaCreatures;
}
