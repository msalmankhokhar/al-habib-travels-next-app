"use client";
import React from "react";
import { useState } from "react";

const countries = [
  "Afghanistan",
  "Albania",
  "Pakistan",
  "United Kingdom",
  "USA",
  //   Other countries...
];

export default function NationalityDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="nationality">What is your nationality?</label>
      <select id="nationality" className="rounded-full p-4 leading-none border-[1.5px] border-gray-400" value={selectedCountry} onChange={handleChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
