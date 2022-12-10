import React from "react";
import countryCodes from "../data/country_codes.json";
import Select from "react-select";

export default function CountrySelect({ selectCountry }) {
  const options = countryCodes.map(({ name, code }) => ({
    label: name,
    value: code,
  }));

  const selectId = "country-select";
  return (
    <div className="country-select selector">
      <label htmlFor={selectId}>Select country</label>
      <Select
        id={selectId}
        options={options}
        isSearchable
        onChange={selectCountry}
      />
    </div>
  );
}
