import React from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../store/actions/reviewAction";
import { IoLocationOutline } from "react-icons/io5";
import styled from "styled-components";
import Country from "../components/Country";
import { Dispatch } from "redux";
import { BsPlusSquareDotted } from "react-icons/bs";
import { Link } from "react-router-dom";

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
  const dispatch: Dispatch = useDispatch();

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
        <div className="flex-auto flex space-x-3 mb-3 sm:flex-col">
          <Link
            to="/add"
            className="w-full flex items-center justify-center rounded-md bg-black text-gray-300 p-2 transition duration-500 ease-in-out text-2xl tracking-wider hover:cursor-pointer hover:scale-150 sm:text-base sm:w-full sm:mb-2"
          >
            Add your Experience &nbsp; <BsPlusSquareDotted />
          </Link>
        </div>
        <p className="tracking-wider text-xl sm:text-base">
          Check out what people are saying about Barcelona,
        </p>
      </div>

      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </React.Fragment>
  );
}
