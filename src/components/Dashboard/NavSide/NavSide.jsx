import React, { useContext } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { MailContext } from "../../../context/MailProvider";

const NavSide = () => {
  const { inbox, spam, deleted, custom } = useContext(MailContext);
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
                className="pl-5 md:pl-10 py-1 hover:bg-[#C6E0F5]  active:scale-95 transition-all flex items-center justify-between"
              >
                <p>Inbox</p>
                <small className="pr-5 text-[#2B76DA]">{inbox.length}</small>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/spam"
                className="pl-5 md:pl-10 py-1 hover:bg-[#C6E0F5]  active:scale-95 transition-all flex items-center justify-between"
              >
                <p>Spam</p>
                <small className="pr-5 text-[#2B76DA]">{spam.length}</small>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/deleted"
                className="pl-5 md:pl-10 py-1 hover:bg-[#C6E0F5]  active:scale-95 transition-all flex items-center justify-between"
              >
                <p>Deleted</p>
                <small className="pr-5 text-[#2B76DA]">{deleted.length}</small>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/custom"
                className="pl-5 md:pl-10 py-1 hover:bg-[#C6E0F5]  active:scale-95 transition-all flex items-center justify-between"
              >
                <p>Custom</p>
                <small className="pr-5 text-[#2B76DA]">{custom.length}</small>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavSide;
