import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [isSearchVisible,   
 setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return   
 (
    <SearchContext.Provider value={{ isSearchVisible, toggleSearchVisibility }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };