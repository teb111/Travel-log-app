import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.div`
  ${mixins.spaceBetween};
  margin-bottom: 10px;
  ${mixins.padX};
  margin-bottom: 5%;
  @media (max-width: 600px) {
    flex-direction: column;

    & h2 {
      padding-bottom: 0.5em;
      font-size: ${theme.fontSizes.xl};
    }

    & form {
      width: 100%;
    }
  }
`;

export const HeaderText = styled.h2`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.lg};
  font-weight: 600;
  padding-top: 0.6em;
  letter-spacing: ${theme.spacing.xxs};
`;

export const SearchContainer = styled.form`
  ${mixins.flexCenter};
  border-bottom: 1px solid ${theme.colors.grey};
  width: 50%;
`;

export const SearchInput = styled.input`
  color: ${theme.colors.black};
`;
