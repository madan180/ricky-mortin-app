import React from 'react';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { SearchBoxWrapper } from './searchBox.style';

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <div className="search-wrapper">
        <InputBase
          placeholder="Search by name…"
          className="input-root input-input"
        />
      </div>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
