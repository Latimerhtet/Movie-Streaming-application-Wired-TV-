import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import MovieCard from "./MovieCard";
const MoviesCollectionCard = ({
  movies,
  heading,
  display,
  overflow,
  flexwrap,
  mt,
  direction,
  entertainmentType,
}) => {
  return (
    <div className=" p-7 bg-[#003049] h-full   ">
      <div className="flex justify-between items-center">
        <h4 className={`text-3xl  mt-${mt} text-white mb-6`}>{heading}</h4>
        <Link to={`${direction}`} className={`no-underline ${display}`}>
          <button className="flex gap-2 items-center text-white text-lg hover:opacity-70">
            Show more
            <IoIosArrowDroprightCircle />
          </button>
        </Link>
      </div>
      <div className={`flex gap-5 overflow-x-${overflow} flex-wrap`}>
        {movies.length &&
          movies.map((movie) => (
            <MovieCard
              entertainmentType={entertainmentType}
              key={movie.id}
              movie={movie}
            />
          ))}
      </div>
    </div>
  );
};

export default MoviesCollectionCard;
