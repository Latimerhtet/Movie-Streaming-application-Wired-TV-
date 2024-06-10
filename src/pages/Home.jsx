import React from "react";
import HeroSection from "../components/HeroSection";
import { json, useLoaderData } from "react-router-dom";
import PopularMovies from "./PopularMovies";
import Upcoming from "./Upcoming";
import MoviesCollectionCard from "../components/MoviesCollectionCard";
import Footer from "../components/Footer";

const Home = ({ display, flexwrap, mt, overflow }) => {
  const topRatedMovies = useLoaderData();
  return (
    <div className="mt-[76px] bg-[#003049] relative z-0">
      <HeroSection topRatedMovies={topRatedMovies} />

      <MoviesCollectionCard
        movies={topRatedMovies}
        display={display ? display : "hidden"}
        flexwrap={flexwrap ? flexwrap : "wrap"}
        heading={"Top Rated"}
        mt={mt ? mt : 3}
        direction={"/popular"}
        overflow={overflow && overflow}
        entertainmentType={"movie"}
      />
      {/* <PopularMovies
        mt={3}
        display={"block"}
        flexwrap={"flex-nowrap"}
        overflow={"hidden"}
      />
      <Upcoming
        mt={3}
        display={"block"}
        flexwrap={"flex-nowrap"}
        overflow={"hidden"}
      /> */}
      <Footer />
    </div>
  );
};

export default Home;

export const loader = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=f1c34ca94c48c69a8b1fac1cc7dfeeba&language=en-US"
  );
  if (!response.ok) {
    throw json(
      { message: "Error loading top rated movies" },
      { statusText: "Error top rated movies" }
    );
  } else {
    const data = await response.json();
    console.log(data.results);
    return data.results;
  }
};
