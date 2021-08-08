export type SeaCreatureCharacter = {
  name: string;
  thumbnail: string;
  price: number;
  catchphrase: string;
};

export type SeaCreatureFromAPI = {
  id: number;
  'file-name': string;
  name: {
    'name-USen': string;
    'name-EUen': string;
    'name-EUnl': string;
    'name-EUde': string;
    'name-EUes': string;
    'name-USes': string;
    'name-EUfr': string;
    'name-USfr': string;
    'name-EUit': string;
    'name-CNzh': string;
    'name-TWzh': string;
    'name-JPja': string;
    'name-KRko': string;
    'name-EUru': string;
  };
  availability: {
    'month-northern': string;
    'month-southern': string;
    time: string;
    isAllDay: boolean;
    isAllYear: boolean;
    'month-array-northern': number[];
    'month-array-southern': number[];
    'time-array': number[];
  };
  speed: string;
  shadow: string;
  price: number;
  'catch-phrase': string;
  image_uri: string;
  icon_uri: string;
  'museum-phrase': string;
};

export type AllSeaCreaturesFromAPI = {
  [key: string]: SeaCreatureFromAPI;
};
// Solange der key ein string ist, nehme ich alle values aus der SeaCreatureFromAPI
