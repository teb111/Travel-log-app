import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { theme } from "../../styles/theme";
const { spacing } = theme;

export const CountryContainer = styled.div`
  ${mixins.flexCenter}
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

export const CountryImage = styled.img`
  border-radius: 5px;
  width: ${(props) => (props.width ? props.width : "85%")};
  height: ${(props) => (props.height ? props.height : "300px")};
  margin-bottom: 10px;
  margin-top: 0;

  @media (max-width: 650px) {
    width: 90%;
    height: 140px;
  }
`;

export const CountryText = styled.p`
  font-size: 16px;
  letter-spacing: ${spacing.xxs};
`;
