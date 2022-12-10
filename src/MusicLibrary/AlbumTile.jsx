import React from 'react';
import getAlbumName from './albums';

export default function AlbumTile({ album }) {
  return (
    <div>{getAlbumName(album)}</div>
  )
}
