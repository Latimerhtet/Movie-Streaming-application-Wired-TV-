import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import PopularMovies from "./pages/PopularMovies";
import Upcoming from "./pages/Upcoming";
import Detail from "./pages/Detail";
import { loader as topRatedMoviesLoader } from "./pages/Home";
import { loader as popularMoviesLoader } from "./pages/PopularMovies";
import { loader as upcomingMoviesLoader } from "./pages/Upcoming";
import { loader as tvShowsLoader } from "./pages/TVShows";
import { loader as detailLoader } from "./pages/Detail";
import Genre, { loader as genreLoader } from "./pages/Genre";
import Search, { loader as searchLoader } from "./pages/Search";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { index: true, element: <Home />, loader: topRatedMoviesLoader },
        {
          path: "/popular",
          element: (
            <PopularMovies mt={3} flexwrap={"wrap"} display={"hidden"} />
          ),
          loader: popularMoviesLoader,
        },
        {
          path: "/upcoming",
          element: <Upcoming />,
          loader: upcomingMoviesLoader,
        },
        { path: "/tvShows", element: <TVShows />, loader: tvShowsLoader },
        { path: "/detail/:id", element: <Detail />, loader: detailLoader },
        { path: "/search/:title", element: <Search />, loader: searchLoader },
        { path: "/genre", element: <Genre />, loader: genreLoader },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
