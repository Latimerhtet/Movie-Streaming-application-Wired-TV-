import { Link, json, useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import MoviesCollectionCard from "../components/MoviesCollectionCard";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
const PopularMovies = ({ mt, overflow, flexwrap, display }) => {
  const popularMovies = useLoaderData();

  return (
    <>
      <div className="mt-[76px] bg-[#003049] relative z-0">
        <HeroSection topRatedMovies={popularMovies} />
        <MoviesCollectionCard
          movies={popularMovies}
          display={display ? display : "hidden"}
          flexwrap={flexwrap ? flexwrap : "wrap"}
          heading={"Trending Now"}
          mt={mt ? mt : 20}
          direction={"/popular"}
          overflow={overflow}
          entertainmentType={"movie"}
        />
      </div>
      <Footer />
    </>
  );
};

export default PopularMovies;

export const loader = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=f1c34ca94c48c69a8b1fac1cc7dfeeba&language=en-US"
  );
  if (!response.ok) {
    throw json(
      { message: "Cannot fetch Data for popular movies" },
      { statusText: "error for popular movies" }
    );
  } else {
    const data = await response.json();
    console.log(data);
    return data.results;
  }
};
