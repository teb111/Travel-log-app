import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  LocationHeader,
  LocationBodyContainer,
  LocationBodyHeading,
  LocationImage,
  LocationHeading,
  LocationContent,
} from "./style/Location.styled";

export default function Location() {
  return (
    <React.Fragment>
      <LocationHeader className="m-4 tracking-wider">
        My Location
      </LocationHeader>
      <LocationBodyContainer className="mb-6">
        <LocationBodyHeading className="m-2">
          <LocationImage src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4"></LocationImage>
          <LocationHeading className="ml-4">
            <h3 className="font-bold tracking-wider">Summer In Spain</h3>
            <h5 className="flex mt-2 font-normal">
              <IoLocationOutline className="m-0 p-0 text-xl text-gray-700" />{" "}
              <span className="font-normal text-gray-500 tracking-wide">
                Barcelona, Spain
              </span>
            </h5>
          </LocationHeading>
        </LocationBodyHeading>
        <LocationContent className="font-normal tracking-wide m-2">
          Spain is the preffered holiday destination of millions of tourists and
          visitors each year, its enviable climate is the envy of the rest of
          Europe as well boasting over 5000 kilometers of diverse coastline
        </LocationContent>
      </LocationBodyContainer>
    </React.Fragment>
  );
}
