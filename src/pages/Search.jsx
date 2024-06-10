import React from "react";
import { Link, json, useLoaderData, useParams } from "react-router-dom";
import MoviesCollectionCard from "../components/MoviesCollectionCard";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Footer from "../components/Footer";
const Search = () => {
  const { title } = useParams();
  const searchResults = useLoaderData();
  return (
    <div className="mt-24">
      <Link to={"/"}>
        <button className=" ml-[35px] mt-2 hover:opacity-80 text-2xl text-white flex gap-2 items-center">
          <FaArrowAltCircleLeft />
          <span>Go Back</span>
        </button>
      </Link>

      {searchResults ? (
        <MoviesCollectionCard
          movies={searchResults}
          display={"hidden"}
          flexwrap={"wrap"}
          heading={`Search results for "${title}" `}
          mt={15}
          direction={"/popular"}
          entertainmentType={"movie"}
        />
      ) : (
        <p>No results found!</p>
      )}

      <Footer />
    </div>
  );
};

export default Search;

export const loader = async ({ request, params }) => {
  const { title } = params;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f1c34ca94c48c69a8b1fac1cc7dfeeba&language=en-US&query=${title}&page=1&include_adult=false`
  );

  if (!response.ok) {
    throw json({ message: "error loading search results" });
  } else {
    const searchResults = await response.json();
    console.log(searchResults.results);
    return searchResults.results;
  }
};
