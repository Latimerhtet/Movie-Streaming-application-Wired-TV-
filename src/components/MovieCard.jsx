import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
const MovieCard = ({ movie, entertainmentType }) => {
  const { id, poster_path, title, release_date } = movie;
  const publishedYear = release_date.slice(0, 4);
  return (
    <Link
      to={`/detail/${id}`}
      key={id}
      className=" w-[190px] flex flex-col gap-3  cursor-pointer"
    >
      <div className="image relative z-0 ">
        <img
          className=" w-[190px] h-[290px] rounded-lg "
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
        <div className="play bg-[rgba(0,0,0,0.5)] text-red-800 absolute top-0 left-0 bottom-0 right-0 z-40 flex justify-center items-center rounded-lg scale-0">
          <FaPlay className="text-5xl" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {title.length > 20 ? (
          <p className="text-gray-400 font-bold">{title.slice(0, 18)}...</p>
        ) : (
          <p className="text-gray-400 font-bold">{title}</p>
        )}
        <div className="flex justify-between items-center text-sm text-slate-400 ">
          <p>{publishedYear}</p>
          <p className="text-xs border-[1px] border-solid border-zinc-400 p-1 rounded-sm">
            {entertainmentType}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
