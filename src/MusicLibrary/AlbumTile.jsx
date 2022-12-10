import React from 'react'

export default function AlbumTile({ album }) {
  return (
    <div>{album["im:name"]["label"]}</div>
  )
}
