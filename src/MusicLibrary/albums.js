export default function getAlbumName(album) {
  const albumName = album["im:name"]?.["label"] || "";
  return albumName;
}