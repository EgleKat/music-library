import countryCodes from './data/country_codes.json';

export default function getCountryByCode(countryCode) {
  console.log(countryCode)
  const name = countryCodes.find(c => c.code === countryCode)?.name;
  return name
}