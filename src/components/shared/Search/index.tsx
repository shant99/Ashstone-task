import useDebounceCallback from "../../../hooks/useDebounce";
import { HeaderProps } from "../../../types/index.types";
import SearchIcon from "../../../assets/icons/Search";
import messages from "../../../messages";
import React, { useState } from "react";
import "./styles.css";

const Search: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [value, setValue] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) setSearchQuery("");
  };

  const debouncedFetchPosts = useDebounceCallback(
    async (searchTerm: string) => {
      setSearchQuery(searchTerm);
    },
    800
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    debouncedFetchPosts(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={messages.searchPosts}
        className={`search-input ${isSearchOpen ? "visible" : ""}`}
        aria-label="Search input"
      />
      <button
        className="search-icon"
        onClick={toggleSearch}
        aria-label="Toggle search"
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
