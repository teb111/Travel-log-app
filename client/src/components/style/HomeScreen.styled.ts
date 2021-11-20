import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { theme } from "../../styles/theme";

export const CountryHeaderContainer = styled.div`
  ${mixins.spaceBetween};
  ${mixins.padX};
`;

export const CountryHeader = styled.h4``;

export const CountryExpand = styled.div`
  ${mixins.flexCenter};
  cursor: pointer;
`;

export const CountryText = styled.span`
  color: ${theme.colors.grey};
`;
