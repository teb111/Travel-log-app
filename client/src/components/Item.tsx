import React from "react";
import {
  CountryContainer,
  CountryImage,
  CountryText,
} from "./style/Item.styled";
import { Link } from "react-router-dom";

export default function Item(Props: Item) {
  return (
    <React.Fragment>
      <Link to="/country">
        <CountryContainer>
          <CountryImage
            src={
              Props.image
                ? Props.image
                : "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96"
            }
            className="w-2/6"
            width={Props.width}
            height={Props.height}
            tabIndex={0}
          />
          <CountryText>{Props.name}</CountryText>
        </CountryContainer>
      </Link>
    </React.Fragment>
  );
}
