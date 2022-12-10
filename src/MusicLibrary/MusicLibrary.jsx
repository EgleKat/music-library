import React, { useState, useEffect } from "react";
import getAlbums from "../actions/musicLibrary";
import { getAlbumName } from "./albums";
import AlbumTile from "./AlbumTile";
import AlbumSearch from "./AlbumSearch";
import CountrySelect from "./CountrySelect";
import Loading from "../Loading";
import { FilterControls, AlbumList } from "./AlbumStyles";

async function loadAlbums(setAlbums, setLoading, countryCode = "us") {
  setLoading(true);
  const response = await getAlbums(50, countryCode);
  console.log(response);
  setAlbums(response.feed.entry);
  setLoading(false);
}
export default function MusicLibrary() {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [country, setCountry] = useState({
    name: "United States",
    countryCode: "US",
  });

  useEffect(() => {
    // when new country is selected, reset albums
    setAlbums([]);
    loadAlbums(setAlbums, setLoading, country.code);
  }, [country]);

  useEffect(() => {
    // reset search if new album list is loaded
    setFilteredAlbums(albums);
  }, [albums]);

  const searchAlbums = (searchVal) => {
    const albumsToDisplay = albums.filter((album) => {
      return getAlbumName(album)
        .toLowerCase()
        .includes(searchVal.toLowerCase());
    });
    setFilteredAlbums(albumsToDisplay);
  };

  const selectCountry = ({ label: countryName, value: countryCode }) => {
    setCountry({ name: countryName, code: countryCode });
  };

  return (
    <div>
      <h2>Top 50 Albums for {country.name}</h2>
      <FilterControls>
        <AlbumSearch searchAlbums={searchAlbums} />
        <CountrySelect selectCountry={selectCountry} />
      </FilterControls>
      {loading && <Loading />}
      {!!filteredAlbums?.length && (
        <AlbumList aria-live="polite">
          {filteredAlbums.map((album, idx) => (
            <AlbumTile key={idx} album={album} />
          ))}
        </AlbumList>
      )}
    </div>
  );
}
