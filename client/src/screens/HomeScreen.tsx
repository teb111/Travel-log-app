import React from "react";
import Header from "../components/Header";

import Countries from "../components/Countries";
import Cities from "../components/Cities";
import Location from "../components/Location";

export default function HomeScreen() {
  return (
    <React.Fragment>
      <Header />
      <Countries />
      <Location />
      <Cities />
    </React.Fragment>
  );
}
