import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import Item from "./Item";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function CarouselComp() {
  return (
    <React.Fragment>
      <Carousel
        show={2.5}
        slide={1}
        transition={0.5}
        swiping={true}
        responsive={true}
        useArrowKeys={false}
        leftArrow={<MdKeyboardArrowLeft style={{ cursor: "pointer" }} />}
        rightArrow={<MdKeyboardArrowRight style={{ cursor: "pointer" }} />}
        className="arrowStyling"
      >
        <Item
          image={"https://images.unsplash.com/photo-1541410965313-d53b3c16ef17"}
          width={"70%"}
          height={"30vh"}
        />

        <Item
          image={"https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96"}
          width={"70%"}
          height={"30vh"}
        />
        <Item
          image={"https://images.unsplash.com/photo-1506929562872-bb421503ef21"}
          width={"70%"}
          height={"30vh"}
        />
        <Item
          image={"https://images.unsplash.com/photo-1498307833015-e7b400441eb8"}
          width={"70%"}
          height={"30vh"}
        />
        <Item
          image={"https://images.unsplash.com/photo-1513581166391-887a96ddeafd"}
          width={"70%"}
          height={"30vh"}
        />
        <Item
          image={"https://images.unsplash.com/photo-1541410965313-d53b3c16ef17"}
          width={"70%"}
          height={"30vh"}
        />
        <Item
          image={"https://images.unsplash.com/photo-1541410965313-d53b3c16ef17"}
          width={"70%"}
          height={"30vh"}
        />
      </Carousel>
    </React.Fragment>
  );
}
