import { defer, json, useLoaderData, useParams } from "react-router-dom";
import { MdPlayCircle } from "react-icons/md";
import MoviesCollectionCard from "../components/MoviesCollectionCard";
import Footer from "../components/Footer";
const Detail = () => {
  const { id } = useParams();
  const { movie, related_movies } = useLoaderData();

  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    runtime,
    release_date,
    production_countries,
    genres,
  } = movie;
  return (
    <section
      className="mt-[81px]  h-[100vh] bg-[#003049]  flex-col items-center justify-center "
      key={id}
    >
      {/* Backdrop Image */}
      <img
        className="relative w-screen h-screen object-cover "
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={title}
      />

      {/* Movie details and descriptions */}
      <div className="movie-div w-[900px] absolute bg-[#003049]  flex items-start gap-6 p-8 rounded-md">
        <img
          className="w-52 h-[350px] rounded-md"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
        <div className="w-[70%] text-white flex flex-col gap-4 items-start">
          <p className=" text-3xl  font-bold">{title}</p>
          <div>
            <span className="font-extrabold text-amber-800">Duration</span> -
            <span> {runtime} min</span>
          </div>
          <div className="flex gap-2">
            {genres &&
              genres.map((genre) => {
                return (
                  <span
                    key={genre.id}
                    className="p-2 bg-yellow-900 text-white rounded-md "
                  >
                    {genre.name}
                  </span>
                );
              })}
          </div>
          <p>{overview}</p>
          <div className="flex flex-col gap-2 items-start">
            <div>
              <span className="font-bold text-white">Released Date</span> -
              <span> {release_date}</span>
            </div>

            <div>
              <span className="font-bold text-white">Countries </span> -
              {production_countries &&
                production_countries.map((country) => {
                  return <span key={country.name}> {country.name},</span>;
                })}
            </div>
            <button className="btn-grad bg-[#495057] flex gap-1 items-center">
              <MdPlayCircle />
              <span>Play Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-36">
        {related_movies.length !== 0 ? (
          <MoviesCollectionCard
            movies={related_movies}
            display={"hidden"}
            flexwrap={"wrap"}
            heading={"You may also like..."}
            mt={20}
            direction={"/popular"}
            entertainmentType={"movie"}
          />
        ) : (
          <p className=" text-center text-3xl text-white mb-10">
            No related Movies found for this movie!
          </p>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Detail;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=f1c34ca94c48c69a8b1fac1cc7dfeeba&language=en-US`
  );
  const response1 = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=f1c34ca94c48c69a8b1fac1cc7dfeeba`
  );
  if (!response.ok || !response1.ok) {
    throw json(
      { message: "there is an error loading details for this movie" },
      { statusText: "error loading details" }
    );
  } else {
    const movie = await response.json();
    const related_moviesJson = await response1.json();
    const related_movies = related_moviesJson.results;
    console.log(movie);
    console.log(related_movies);
    return defer({ movie, related_movies });
  }
};
