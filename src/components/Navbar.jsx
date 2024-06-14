import { PiTelevision } from "react-icons/pi";
import { Form, Link, NavLink, useNavigate } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";
import SearchForm from "./SearchForm";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    setShowMenu(true);
  };
  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <nav
      className={
        "flex justify-between p-5 sm:flex-col sm:text-white sm:gap-2 sm:text-center  items-center  bg-[#003049] text-white fixed top-0 left-0 right-0 z-40"
      }
    >
      <div className="sm:flex sm:w-full sm:justify-between">
        <Link to={"/"}>
          <p className="text-xl flex gap-1 items-center">
            Weird-TV
            <PiTelevision />
          </p>
        </Link>
        {showMenu ? (
          <RiCloseLargeFill onClick={handleClose} />
        ) : (
          <GrMenu className="text-xl md:hidden" onClick={handleShow} />
        )}
      </div>

      {showMenu && (
        <div className={"flex gap-5 flex-col lg:invisible lg:hidden "}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/popular"}>Popular</NavLink>
          <NavLink to={"/upcoming"}>Upcoming</NavLink>
          <SearchForm show={"visible"} />
        </div>
      )}
      <div className={"flex lg:gap-5 sm:hidden sm:invisible "}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/popular"}>Popular</NavLink>
        <NavLink to={"/upcoming"}>Upcoming</NavLink>
      </div>
      <SearchForm show={"hidden"} />
    </nav>
  );
};

export default Navbar;
