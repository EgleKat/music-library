import React, { useState, useEffect } from "react";
import getAlbums from "../actions/musicLibrary";
import AlbumTile from "./AlbumTile";
import MusicSearch from "./MusicSearch";

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


  const searchAlbums = () => {

  }

  return (<div>
    {loading && "Loading..."}
    <MusicSearch searchAlbums={searchAlbums} />
    {
      albums.map(album => <AlbumTile album={album} />)
    }
  </div>);
}
