import React from "react";
import Header from "../components/Header";
import Item from "../components/Item";

export default function CountriesScreen() {
  return (
    <React.Fragment>
      <Header />
      <div className="grid grid-cols-3">
        <Item name={"China"} />
        <Item name={"Canada"} />
        <Item name={"South Africa"} />
        <Item name={"Ghana"} />
        <Item name={"Usa"} />
        <Item name={"Germany"} />
        <Item name={"England"} />
        <Item name={"Belgium"} />
        <Item name={"Uruguay"} />
      </div>
    </React.Fragment>
  );
}
