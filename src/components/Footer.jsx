import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { PiTelevision } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to={"/"}>
        <p className="text-xl flex gap-1 items-center">
          Weird-TV
          <PiTelevision />
        </p>
      </Link>
      <div className="flex gap-4 items-center text-lg">
        <p>Follow us on</p>
        <FaFacebookSquare className="cursor-pointer" />
        <BsInstagram className="cursor-pointer" />
        <FaXTwitter className="cursor-pointer" />
        <FaThreads className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
