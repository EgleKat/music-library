import React, { useState, useEffect } from "react";
import getAlbums from "../actions/musicLibrary";
import AlbumTile from "./AlbumTile";

async function loadAlbums(setAlbums, setLoading) {
  setLoading(true);
  const response = await getAlbums(50);
  console.log(response)

  setAlbums(response.feed.entry);
  setLoading(false);
}
export default function MusicLibrary() {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    loadAlbums(setAlbums, setLoading);
  }, []);

  return (<div>
    {loading && "Loading..."}
    {
      albums.map(album => <AlbumTile album={album} />)
    }
  </div>);
}
