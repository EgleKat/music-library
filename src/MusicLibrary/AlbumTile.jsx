import React from 'react';
import getAlbumName from './albums';

export default function AlbumTile({ album, place }) {
  return (
    <li>{getAlbumName(album)}</li>
  )
}
