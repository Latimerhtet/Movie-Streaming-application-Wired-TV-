import { PiTelevision } from "react-icons/pi";
import { Form, Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [searchword, setSearch] = useState();
  const startSearch = (e) => {
    e.preventDefault();
    if (searchword.trim().length == 0) {
      window.confirm("You should type something!");
    } else {
      navigate(`/search/${searchword}`);
    }
    setSearch("");
  };
  return (
    <nav className="flex justify-between items-center p-5 bg-[#003049] text-white fixed top-0 left-0 right-0 z-40">
      <Link to={"/"}>
        <p className="text-xl flex gap-1 items-center">
          Weird-TV
          <PiTelevision />
        </p>
      </Link>
      <div className="flex gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/popular"}>Popular</NavLink>
        <NavLink to={"/upcoming"}>Upcoming</NavLink>
        {/* <NavLink to={"/tvShows"}>TV Shows</NavLink> */}
      </div>
      <Form
        className="flex gap-2 items-center relative "
        onSubmit={startSearch}
      >
        <input
          className={
            " w-[250px] p-2 bg-transparent border-b-2 border-b-gray-400 text-sm  outline-none   text-white"
          }
          name="title"
          value={searchword}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button
          type="submit"
          className="text-white  absolute right-1 rounded-md"
        >
          <CiSearch className="text-xl" />
        </button>
      </Form>
    </nav>
  );
};

export default Navbar;
