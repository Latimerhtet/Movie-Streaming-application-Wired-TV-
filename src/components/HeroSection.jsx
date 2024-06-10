import React, { useEffect } from "react";
import HeroSplice from "./HeroSplice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
const HeroSection = ({ topRatedMovies }) => {
  return (
    <div className="flex justify-center items-center ">
      <Splide
        options={{
          type: "loop",
          speed: 5000,
          autoplay: true,
          interval: 4000,
          arrows: true,
        }}
      >
        {topRatedMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <HeroSplice movie={movie} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default HeroSection;
