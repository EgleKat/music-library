import React from "react";
import { getAlbumName, getAlbumArtist, getAlbumImage } from "./albums";
import { Album } from "./AlbumStyles";
export default function AlbumTile({ album, place }) {
  console.log(album);
  return (
    <li>
      <Album>
        <div className="album-name">{getAlbumName(album)}</div>
        <div className="album-image">
          <img src={getAlbumImage(album)}></img>
        </div>
        <span>by</span>
        <div className="album-artist">{getAlbumArtist(album)}</div>
      </Album>
    </li>
  );
}
