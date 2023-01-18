import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdMailOpen } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const MailSection = () => {
  return (
    <div>
      <div className="flex items-center bg-[#DEECFA]">
        {/* New */}
        <div className="flex items-center gap-1 cursor-pointer hover:bg-[#c8dbee] px-2 active:scale-95">
          <AiOutlinePlusCircle className="text-5xl p-2" /> New
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-[#c8dbee] px-2 active:scale-95">
          <IoMdMailOpen className="text-5xl p-2" /> Mark all as read
        </div>
      </div>

      {/* preview Mail */}
      <div className="grid grid-cols-10 bg-white">
        {/* Emails */}
        <div className="col-span-4 border border-transparent border-r-slate-600">
          {/* Filter */}
          <div className="flex justify-between items-center px-5 text-lg pt-5">
            <div>
              <span className="font-medium text-[#2B76DA] mr-2 border-b-2 border-b-[#2B76DA] hover:bg-slate-200 cursor-pointer px-4 py-1 transition-all">
                Focused
              </span>
              <span className="font-medium text-[#2B76DA] hover:bg-slate-200 cursor-pointer px-4 py-1 transition-all">
                Others
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-medium mr-2 ">Filter</span>
              <AiOutlineCaretDown className="text-xl  text-[#2B76DA] " />
            </div>
          </div>
          {/* Email Short lists goes here */}
          {/* Loop here inbox json*/}
          <div className="mt-5">
            <div className="pl-5 border-l-2 border-l-[#2B76DA] hover:bg-blue-100 py-2 pr-2 active:scale-95 transition-all">
              {/* Subject */}
              <p className="text-lg font-medium text-slate-700">Lookout Team</p>
              <div className="flex justify-between text-[#2B76DA]">
                {/* content */}
                <small className=" uppercase font-medium">
                  Welcome to new Lookout team account
                </small>
                <small className="font-medium">11:50</small>
              </div>
              {/* Content */}
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet consectetur adip ...
              </p>
            </div>
          </div>

          <Outlet />
        </div>
        {/* Email Preview */}
        <div className="col-span-6"></div>
      </div>
    </div>
  );
};

export default MailSection;
