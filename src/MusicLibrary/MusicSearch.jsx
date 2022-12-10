import React, { useState, useRef } from 'react'

export default function MusicSearch() {

  const searchInput = useRef(null);
  const [searchVal, setSearchVal] = useState("");

  return (
    <input onChange={event => setSearchVal(event?.target?.value || "")} ref={searchInput} value={searchVal} />
  )
}
