import { json } from "react-router-dom";

const Genre = () => {
  return <div>Genre</div>;
};

export default Genre;

export const loader = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/movie_id/similar?api_key=f1c34ca94c48c69a8b1fac1cc7dfeeba"
  );
  if (!response.ok) {
    // code
  } else {
    const data = await response.json();
    console.log(data);
    return data;
  }
};
