import { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/Icons/Search.svg';
const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <Styled role="search">
      {/* <label htmlFor="searchInput">Search:</label> */}
      <input
        type="text"
        id="searchInput"
        placeholder="Search this site"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch} aria-label="Submit search">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </Styled>
  );
};

export default Search;

const Styled = styled.div`
  display: flex;
  height: 48px;
  input {
    width: 345px;
    min-width: 200px;
    padding: 11px 15px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: ${({ theme }) => theme.fontSizes.head4};
    &::placeholder {
      color: ${({ theme }) => theme.colors.blue_grey};
    }
  }
  button {
    width: 48px;
    background: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => theme.colors.primary};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    img {
      margin: 8px;
    }
  }
`;
