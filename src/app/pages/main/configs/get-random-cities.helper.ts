
export function getRandomCities(count: number): string[] {
  const min = 0;
  const max = cities.length - count;
  const startIndex = Math.floor(Math.random() * (max - min + 1) + min)
  return cities.slice(startIndex, startIndex + count)
}

const cities = [
  'Tirana',
  'Vienna',
  'Brussels',
  'Sarajevo',
  'Sofia',
  'Zagreb',
  'Prague',
  'Copenhagen',
  'Tallinn',
  'Helsinki',
  'Paris',
  'Berlin',
  'Athens',
  'Budapest',
  'Reykjavik',
  'Dublin',
  'Rome',
  'Riga',
  'Vaduz',
  'Vilnius',
  'Luxembourg',
  'Valletta',
  'Chisinau',
  'Monaco',
  'Podgorica',
  'Amsterdam',
  'Skopje',
  'Oslo',
  'Warsaw',
  'Lisbon',
  'Bucharest',
  'Belgrade',
  'Bratislava',
  'Ljubljana',
  'Madrid',
  'Stockholm',
  'Bern',
  'Kiev',
  'London',
];
