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
            src={Props.image}
            className="w-2/6"
            width={Props.width}
            height={Props.height}
          />
          <CountryText>{Props.name}</CountryText>
        </CountryContainer>
      </Link>
    </React.Fragment>
  );
}
