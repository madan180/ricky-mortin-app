import styled, { css } from 'styled-components';

export const SearchBoxWrapper = styled.div`
  .search-wrapper {
    position: relative;
    z-index: 10;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.15);
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
    margin-right: 16px;
    margin-left: 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    .search-wrapper {
      width: auto;
    }
  }
  .input-root {
    color: inherit;
  }
  .input-input {
    padding: 2px 0;
    padding-left: calc(1em + 8px);
    transition: width 200ms ease-in-out;
    width: 100%;
    @media (min-width: 1024px) {
      width: 30ch;
    }
  }
`;
