import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import styled from "styled-components";
import Country from "../components/Country";

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  width: 100vw;
  height: 70vh;
  margin-bottom: 20px;
`;

const ImageText = styled.h2`
  position: absolute;
  bottom: 8px;
  left: 16px;
`;

export default function CountryScreen() {
  return (
    <React.Fragment>
      <ImageContainer>
        <Image
          src={"https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96"}
        />
        <ImageText className="text-2xl tracking-wider text-white flex">
          {" "}
          <IoLocationOutline className="m-0 p-0 mr-2 text-2xl mt-1" />{" "}
          Barcelona, Spain
        </ImageText>
      </ImageContainer>
      <div className="p-4">
        <p>Check out what people has said about Barcelona,</p>
      </div>

      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </React.Fragment>
  );
}
