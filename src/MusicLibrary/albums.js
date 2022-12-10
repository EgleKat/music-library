export function getAlbumName(album) {
  const albumName = album["im:name"]?.["label"] || "";
  return albumName;
}
export function getAlbumArtist(album) {
  const albumArtist = album["im:artist"]?.["label"] || "";
  return albumArtist;
}
export function getAlbumImage(album) {
  const albumImage = album["im:image"]?.[3]?.["label"]
    || album["im:image"]?.[2]?.["label"]
    || album["im:image"]?.[1]?.["label"]
    || album["im:image"]?.[0]?.["label"]
    || "";
  console.log(albumImage);
  return albumImage;
}