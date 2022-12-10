/**
 * Get top albums
 * @param {number} numberOfAlbums 
 */
export default async function getAlbums(numberOfAlbums = 50, countryCode = "us") {
  const response = fetch(`https://itunes.apple.com/${countryCode}/rss/topalbums/limit=${numberOfAlbums}/json`);
  return (await response).json();
}