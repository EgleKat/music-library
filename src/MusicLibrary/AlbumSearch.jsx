import React, { useState, useRef } from "react";

export default function AlbumSearch({ searchAlbums }) {
  const searchInput = useRef(null);
  const [searchVal, setSearchVal] = useState("");

  function handleChange(event) {
    setSearchVal(event?.target?.value || "");
    searchAlbums(event?.target?.value);
  }

  const labelId = "album-search";
  return (
    <div className="album-search selector">
      <label htmlFor={labelId}>Search albums</label>
      <input
        onChange={handleChange}
        ref={searchInput}
        value={searchVal}
        id={labelId}
        type="input"
        placeholder="Christmas..."
      />
    </div>
  );
}
