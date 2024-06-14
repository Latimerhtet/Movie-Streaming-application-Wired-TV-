import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
const SearchForm = ({ show }) => {
  const [searchword, setSearch] = useState();
  const navigate = useNavigate();
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
    <div>
      <Form
        className={`flex gap-2 w-full items-center relative sm:${show}`}
        onSubmit={startSearch}
      >
        <input
          className={
            " w-[250px] sm:w-10 p-2 bg-transparent border-b-2 border-b-gray-400 text-sm  outline-none   text-white"
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
    </div>
  );
};

export default SearchForm;
