/**
 * Get top albums
 * @param {number} numberOfAlbums 
 */
export default async function getAlbums(numberOfAlbums = 50) {
  const response = fetch(`https://itunes.apple.com/us/rss/topalbums/limit=${numberOfAlbums}/json`);
  return (await response).json();
}