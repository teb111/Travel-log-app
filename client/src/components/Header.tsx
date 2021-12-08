import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderText,
  SearchContainer,
  SearchInput,
} from "./style/Header.styled";
import { BsSearch } from "react-icons/bs";
import { theme } from "../styles/theme";
const { colors } = theme;

export default function Header() {
  const submitHandler = () => {};
  return (
    <React.Fragment>
      <HeaderContainer className="w-full h-full font-serif">
        <Link to="/">
          {" "}
          <HeaderText>Travel</HeaderText>{" "}
        </Link>
        <SearchContainer onSubmit={submitHandler}>
          <button
            className="flex-shrink-0 bg-teal-500 text-sm text-white py-1 px-2 rounded"
            type="submit"
          >
            <BsSearch color={colors.grey} />
          </button>
          <SearchInput
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Travel"
          />
        </SearchContainer>
      </HeaderContainer>
    </React.Fragment>
  );
}
