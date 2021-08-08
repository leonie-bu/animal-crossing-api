import { SeaCreatureCharacter, AllSeaCreaturesFromAPI } from '../types';

export async function getSeaCreature(): Promise<SeaCreatureCharacter[]> {
  const response = await fetch(`https://acnhapi.com/v1/sea/`);

  // Variable mit den Namen data und dem Datentyp von AllSeaCreaturesFromAPI
  const data: AllSeaCreaturesFromAPI = await response.json();

  // Object.values: returns an array of a given object's own property values
  // --> the values of the object data are turned into an array seacreatures
  const seacreatures = Object.values(data);

  const formattedSeaCreatures: SeaCreatureCharacter[] = seacreatures.map(
    (seacreature) => {
      const formattedSeaCreature: SeaCreatureCharacter = {
        name: seacreature.name['name-EUen'],
        thumbnail: seacreature.image_uri,
        price: seacreature.price,
        catchphrase: seacreature['catch-phrase'],
      };
      return formattedSeaCreature;
    }
  );
  return formattedSeaCreatures;
}

export function searchSeaCreature(
  allSeaCreatures: SeaCreatureCharacter[],
  name: string
): SeaCreatureCharacter[] {
  const needle = name.toLowerCase();
  const filteredSeaCreatures = allSeaCreatures.filter(
    (seaCreatures) => seaCreatures.name.toLowerCase().indexOf(needle) !== -1
  );
  return filteredSeaCreatures;
}
