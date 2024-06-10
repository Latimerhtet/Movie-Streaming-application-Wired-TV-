import React from "react";
import MoviesCollectionCard from "../components/MoviesCollectionCard";
import { json, useLoaderData } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
const Upcoming = ({ display, flexwrap, mt, overflow }) => {
  const upcomingMovies = useLoaderData();
  return (
    <div className="mt-[76px] bg-[#003049] relative z-0">
      <HeroSection topRatedMovies={upcomingMovies} />
      <MoviesCollectionCard
        movies={upcomingMovies}
        display={display ? display : "hidden"}
        flexwrap={flexwrap ? flexwrap : "wrap"}
        heading={"Upcoming Movies"}
        mt={mt ? mt : 3}
        direction={"/upcoming"}
        overflow={overflow && overflow}
        entertainmentType={"movie"}
      />
      <Footer />
    </div>
  );
};

export default Upcoming;

export const loader = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=f1c34ca94c48c69a8b1fac1cc7dfeeba&language=en-US"
  );
  if (!response.ok) {
    throw json(
      { message: "There is an error fetching Upcoming movies" },
      { statusText: "error for upcoming movies" }
    );
  } else {
    const data = await response.json();
    return data.results;
  }
};
