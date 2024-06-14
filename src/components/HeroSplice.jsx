import React, { useState } from "react";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const HeroSplice = ({ movie }) => {
  const { id, backdrop_path, title, overview } = movie;
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div key={id}>
      <div className="herosection-img">
        <img
          className="w-screen h-full object-cover border-2 border-solid border-gray-500"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
        />
      </div>
      <div className="absolute sm:left-7 left-28 bottom-[50%] translate-y-[50%] text-white w-[600px] z-20 flex flex-col gap-3 items-start">
        <h4 className="text-5xl sm:text-base font-extrabold mb-1">{title}</h4>
        {seeMore ? (
          <p className="sm:max-sm:hidden mb-3 text-lg">
            {overview + " "}
            <span
              className="font-bold text-cyan-700 cursor-pointer hover:underline"
              onClick={() => setSeeMore(!seeMore)}
            >
              see Less...
            </span>
          </p>
        ) : (
          <p className="sm:hidden mb-3 text-lg">
            {overview.slice(0, 90) + " "}
            <span
              className="font-bold text-cyan-700 cursor-pointer hover:underline"
              onClick={() => setSeeMore(!seeMore)}
            >
              see more...
            </span>
          </p>
        )}

        <Link to={`/detail/${id}`}>
          <button className="border-2 border-solid border-white text-white bg-transparent p-2 hover:bg-white hover:text-black transition-all duration-150 rounded-md flex gap-1 items-center">
            Watch Now
            <span>
              <BsFillPlayBtnFill className="text-xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSplice;
