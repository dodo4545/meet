import React, { useState } from 'react';

const CitySearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState(['Berlin, Germany', 'Munich, Germany']);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div data-testid="city-search">
      <input
        type="text"
        placeholder="Search for a city"
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitySearch;