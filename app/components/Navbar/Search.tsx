"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div
      className="
      cursor-pointer
        w-full
        md:w-auto
        shadow-sm
        hover:shadow-md
        border
        rounded-full
        flex
        items-center
        space-x-2
        p-2
        px-4
        transition-all
        justify-between
    "
    >
      <div className="text-sm font-semibold text-gray-600 hover:text-black">
        Any Where
      </div>
      <div className="hidden sm:block border-x px-4 text-sm font-semibold text-gray-600 hover:text-black">
        Any Week
      </div>
      <div className="hidden sm:block  px-1 text-sm font-semibold text-gray-400 hover:text-black">
        Add Guests
      </div>
      <div className="bg-rose-500 rounded-full text-white p-1">
        <BiSearch />
      </div>
    </div>
  );
};

export default Search;
