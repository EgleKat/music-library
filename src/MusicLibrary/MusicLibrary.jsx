import React, { useState, useEffect } from "react";
import getAlbums from "../actions/musicLibrary";
import getAlbumName from "./albums";
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
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    loadAlbums(setAlbums, setLoading);
  }, []);

  useEffect(() => {
    // reset search if new album list is loaded
    setFilteredAlbums(albums);
  }, [albums])


  const searchAlbums = (searchVal) => {
    const albumsToDisplay = albums.filter(album => {
      return getAlbumName(album).toLowerCase().includes(searchVal.toLowerCase());
    })
    setFilteredAlbums(albumsToDisplay);
  }

  return (<div>
    {loading && "Loading..."}
    <MusicSearch searchAlbums={searchAlbums} />
    {
      filteredAlbums.map(album => <AlbumTile album={album} />)
    }
  </div>);
}
