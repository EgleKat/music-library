import React from "react";
import countryCodes from "../data/country_codes.json";
import Select from "react-select";

export default function CountrySelect({ selectCountry }) {
  const options = countryCodes.map(({ name, code }) => ({
    label: name,
    value: code,
  }));

  return (
    <div>
      <Select options={options} isSearchable onChange={selectCountry} />
    </div>
  );
}
