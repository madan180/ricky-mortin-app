import styled, { css } from 'styled-components';

const FilterComponentWrapper = styled.div`
  ${() => css`
    background-color: #f5f5f5;
    h4 {
      text-transform: capitalize;
      padding-left: 10px;
      padding-top: 10px;
    }
    .checkbox-with-label {
      display: 'flex';
      align-items: center;
    }
    @media (min-width: 1280px) {
      margin: 0 1rem 1rem 0;
    }
  `};
`;

export default FilterComponentWrapper;
