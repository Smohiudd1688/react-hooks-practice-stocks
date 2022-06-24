import React, {useState} from "react";

function SearchBar({onSortChange, onFilterChange}) {
  const [alphaChecked, setAlphaChecked] = useState(false);
  const [priceChecked, setPriceChecked] = useState(false);

  function handleSortChange(event) {
    if(event.target.value === "Alphabetically") {
      if(priceChecked) {
        setPriceChecked(priceChecked => !priceChecked);
      }
      setAlphaChecked(alphaChecked => !alphaChecked);
      onSortChange(event.target.value);
    } else {
      if(alphaChecked) {
        setAlphaChecked(alphaChecked => !alphaChecked);
      }
      setPriceChecked(priceChecked => !priceChecked);
      onSortChange(event.target.value);
    }
  }

  function handleFilterChange(event) {
    if(priceChecked) {
      setPriceChecked(priceChecked => !priceChecked);
    }
    if(alphaChecked) {
      setAlphaChecked(alphaChecked => !alphaChecked);
    }
    onFilterChange(event.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphaChecked}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceChecked}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
