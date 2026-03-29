import React from "react";
import Button from "../atoms/Button";

function Search({
  value,
  onChange,
  onSubmit,
  placeholder = "Search products...",
  disabled = false,
}) {
  return (
    <form onSubmit={onSubmit} role="search" className="w-100">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-label="Search"
        />
        <Button type="submit" variant="primary" disabled={disabled}>
          Search
        </Button>
      </div>
    </form>
  );
}

export default Search;
