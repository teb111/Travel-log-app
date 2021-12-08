import React from "react";
import {
  CountryHeaderContainer,
  CountryHeader,
  CountryExpand,
  CountryText,
} from "../components/style/HomeScreen.styled";
import { Carousel } from "@trendyol-js/react-carousel";
import Item from "./Item";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../styles/theme";
const { colors } = theme;

export default function Cities(): JSX.Element {
  return (
    <React.Fragment>
      <CountryHeaderContainer>
        <CountryHeader className="tracking-wider">Popular Cities</CountryHeader>
        <CountryExpand>
          <CountryText>See all </CountryText>
          <IoChevronForward color={colors.grey} />{" "}
        </CountryExpand>
      </CountryHeaderContainer>
      <Carousel
        show={2.5}
        slide={3}
        transition={1}
        swiping={true}
        responsive={true}
        useArrowKeys={true}
        leftArrow={<MdKeyboardArrowLeft style={{ cursor: "pointer" }} />}
        rightArrow={<MdKeyboardArrowRight style={{ cursor: "pointer" }} />}
        className="arrowStyling"
      >
        <Item
          name={"Afghanistan"}
          image={"https://images.unsplash.com/photo-1541410965313-d53b3c16ef17"}
        />
        <Item
          name={"Andorra"}
          image={"https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96"}
        />
        <Item
          name={"Nigeria"}
          image={"https://images.unsplash.com/photo-1506929562872-bb421503ef21"}
        />
        <Item
          name={"Ukraine"}
          image={"https://images.unsplash.com/photo-1498307833015-e7b400441eb8"}
        />
        <Item
          name={"Norway"}
          image={"https://images.unsplash.com/photo-1513581166391-887a96ddeafd"}
        />
        <Item
          name={"Singapore"}
          image={"https://images.unsplash.com/photo-1541410965313-d53b3c16ef17"}
        />
        <Item
          name={"China"}
          image={"https://images.unsplash.com/photo-1541410965313-d53b3c16ef17"}
        />
        <Item
          name={"Canada"}
          image={"https://images.unsplash.com/photo-1541410965313-d53b3c16ef17"}
        />
        <Item
          name={"Portugal"}
          image={"https://images.unsplash.com/photo-1541410965313-d53b3c16ef17"}
        />
      </Carousel>
    </React.Fragment>
  );
}
