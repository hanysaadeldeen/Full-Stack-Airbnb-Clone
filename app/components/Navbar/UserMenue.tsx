"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuIte from "./MenuItem";
import { useState } from "react";

export const UserMenue = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ToogleMenu = () => {
    setShowMenu(!showMenu);

    console.log(showMenu);
  };
  return (
    <div className="flex items-center gap-1">
      <div
        className="
      hidden
      md:block
      cursor-pointer
      p-2
      rounded-full
      hover:bg-neutral-50"
      >
        Airbnb your Home
      </div>

      <div
        onClick={ToogleMenu}
        className="relative border-neutral-200  gap-x-2 flex items-center md:px-3 rounded-lg md:rounded-full border cursor-pointer p-1 hover:shadow-md transition-all"
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <Avatar />
        </div>
        {showMenu && (
          <div className="md:hidden absolute transition-all rounded-md top-12  w-[300px] text-sm p-1 shadow-md  z-10 right-0 border ">
            <MenuIte label="Login" onclick={ToogleMenu} />
            <MenuIte label="Sign up" onclick={ToogleMenu} />
            <MenuIte label="Add Guests" onclick={ToogleMenu} />
            <MenuIte label="Any Week" onclick={ToogleMenu} />
          </div>
        )}
      </div>
    </div>
  );
};
