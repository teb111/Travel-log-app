import React from "react";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";
import CarouselComp from "../components/CarouselComp";
import { theme } from "../styles/theme";

const ReviewContainer = styled.div`
  background-color: ${theme.colors.offWhite};
`;

const Author = styled.div``;

const ReviewBody = styled.div``;

export default function Country() {
  return (
    <React.Fragment>
      <ReviewContainer>
        <Author className="flex justify-start p-2">
          <img
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a"
            width="100"
            height="50"
          />
          <div className="flex flex-col">
            <p className="ml-4 text-xl tracking-wider">
              <span className="text-gray-700 font-semibold">Name:</span> Craig
              Dayan{" "}
            </p>
            <h5 className="flex mt-2 font-normal">
              <IoLocationOutline className="m-0 p-0 ml-3 text-2xl" />{" "}
              <span className="font-normal text-gray-800 pt-1">
                Barcelona, Spain
              </span>
            </h5>
            <h5 className="flex mt-2 font-normal ml-4">
              <span className="font-normal">Rating: 5 stars</span>
            </h5>
            <h5 className="flex mt-2 font-normal ml-4">
              <span className="font-normal">
                Cost Of Travel: <span className="font-bold">$4500</span>
              </span>
            </h5>
          </div>
        </Author>
        <ReviewBody>
          <p className="p-2 tracking-wide">
            <span className="text-gray-700 font-semibold">My Experience:</span>{" "}
            &nbsp; Whether you are writing your next best-selling novel, or a
            blog post for your website, our state-of-the-art AI will help you
            turn your thoughts into well-written paragraphs. Turn to it when you
            need a creative brainstorming partner, or when you want to expand
            and develop a thought. All in a clean, blank, distraction-free
            interface.
          </p>
          <div>
            <label className="font-bold text-xl tracking-wider ml-4 text-gray-700">
              Heritages
            </label>
            <ul className="list-disc ml-6 tracking-wide">
              <li>Alcalá de Henares</li>
              <li>Ávila</li>
              <li>Baeza</li>
              <li>Cáceres</li>
            </ul>
          </div>
          <span className="p-2 text-gray-700 font-semibold tracking-wider">
            More Image(s) of Barcelona
          </span>
          <CarouselComp />
        </ReviewBody>
      </ReviewContainer>
      <br />
      <hr />
    </React.Fragment>
  );
}
