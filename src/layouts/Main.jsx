import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

const Main = () => {
  const { state } = useNavigation();

  return (
    <div>
      <Navbar />
      {state === "loading" ? <Loader /> : <Outlet />}
    </div>
  );
};

export default Main;
