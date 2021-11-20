import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { theme } from "../../styles/theme";

const { colors } = theme;

export const LocationHeader = styled.h3``;

export const LocationBodyContainer = styled.div`
  background-color: ${colors.offWhite};
  padding: 10px;
`;

export const LocationBodyHeading = styled.div`
  ${mixins.flexCenter}
  justify-content: flex-start;
`;

export const LocationImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const LocationHeading = styled.div``;

export const LocationContent = styled.p``;
