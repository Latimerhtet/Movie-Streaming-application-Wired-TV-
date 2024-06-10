import React from "react";
import { json, useLoaderData } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import MoviesCollectionCard from "../components/MoviesCollectionCard";
const TVShows = ({ display, flexwrap, mt, overflow }) => {
  const tv = useLoaderData();
  return (
    <div className="mt-[76px] bg-[#003049] relative z-0">
      <HeroSection topRatedMovies={tv} />
      {/* <MoviesCollectionCard
        movies={tv}
        display={display ? display : "hidden"}
        flexwrap={flexwrap ? flexwrap : "wrap"}
        heading={"TV Shows"}
        mt={mt ? mt : 3}
        direction={"/popular"}
        overflow={overflow && overflow}
        entertainmentType={"TV Shows"}
      /> */}
    </div>
  );
};

export default TVShows;

export const loader = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=f1c34ca94c48c69a8b1fac1cc7dfeeba"
  );
  if (!response.ok) {
    throw json({ message: "invalid" });
  } else {
    const data = await response.json();
    console.log(data.results);
    return data.results;
  }
};
