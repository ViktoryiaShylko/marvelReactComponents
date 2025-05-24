import React from "react";
import HeroCard from "./HeroCard";
import heroes from "../data/data";

function CardList() {
  return (
    <React.Fragment>
      {heroes.map((hero, index) => (
        <HeroCard hero={hero} key={index} />
      ))}
    </React.Fragment>
  );
}

export default CardList;
