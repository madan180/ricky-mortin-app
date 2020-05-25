import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  ${() => css`
    .MuiMenuItem-root a {
      text-decoration: none;
    }
    .app-title {
      flex-grow: 1;
    }
    .search-header-wrapper {
      position: relative;
      .search-btn {
        position: absolute;
        right: 10px;
        bottom: 0;
        z-index: 10;
        box-shadow: none;
        background: transparent;
      }
    }
  `};
`;
