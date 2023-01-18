import React from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const NavSide = () => {
  return (
    <div className="bg-[#F4F4F4] ">
      {/* Search section */}
      <div className="flex justify-between items-center bg-[#DEECFA]">
        <input
          type="text"
          placeholder="search"
          className="w-full bg-[#DEECFA] outline-none h-full pl-2"
        />
        <RxMagnifyingGlass className="text-5xl p-2 text-[#2B76DA]" />
      </div>
      {/* Folders section */}
      <div className="text-slate-800 pt-5">
        <div className="flex items-center px-5 text-lg">
          <BsFillArrowUpSquareFill className="mr-2 text-xl text-slate-800 " />
          <span className="text-xl font-medium">Folders</span>
        </div>
        {/* Navs */}
        <nav className="mt-5 text-lg font-medium">
          <ul className="">
            <li>
              <NavLink
                to="/inbox"
                className="pl-5 md:pl-10 py-1 hover:bg-[#C6E0F5] block active:scale-95 transition-all"
              >
                Inbox
              </NavLink>
            </li>
            <li>
              <NavLink
                to="spam"
                className="pl-5 md:pl-10 py-1 hover:bg-[#C6E0F5] block active:scale-95 transition-all"
              >
                Spam
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/deleted"
                className="pl-5 md:pl-10 py-1 hover:bg-[#C6E0F5] block active:scale-95 transition-all"
              >
                Deleted
              </NavLink>
            </li>
            <li>
              <NavLink
                to="custom"
                className="pl-5 md:pl-10 py-1 hover:bg-[#C6E0F5] block active:scale-95 transition-all"
              >
                Custom
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavSide;
