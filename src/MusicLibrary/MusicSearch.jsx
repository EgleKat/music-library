import React, { useState, useRef } from 'react'

export default function MusicSearch({ searchAlbums }) {

  const searchInput = useRef(null);
  const [searchVal, setSearchVal] = useState("");

  function handleChange(event) {
    setSearchVal(event?.target?.value || "")
    searchAlbums(event?.target?.value);
  }
  return (
    <>
      <label htmlFor="search">Search albums </label>
      <input onChange={handleChange} ref={searchInput} value={searchVal} name="search" type="input" placeholder="Christmas..." />
    </>
  )
}
