import styled, { css } from "styled-components";
import Grid from "@material-ui/core/Grid";

export const LayoutContainer = styled.div`
  ${() => css`
    max-width: 1280px;
    margin: 88px auto 0;
  `};
`;

export const LeftSection = styled(Grid)`
  ${() => css``};
`;

export const RightSection = styled(Grid)``;
