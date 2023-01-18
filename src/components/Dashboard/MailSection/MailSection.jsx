import React, { useContext } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdMailOpen } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import mailImage from "../../../assets/mail.svg";
import { MailContext } from "../../../context/MailProvider";

const MailSection = () => {
  const { selectedMail } = useContext(MailContext);
  return (
    <div className="">
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
          <Outlet />
        </div>
        {/* Email Preview */}
        <div className="col-span-6">
          <div className="grid place-items-center  mt-10">
            {!selectedMail.mId ? (
              <img src={mailImage} className="w-[200px]" alt="" />
            ) : (
              // Show Mail
              <div className="text-slate-700 px-5">
                <h1 className="text-2xl mb-5">{selectedMail.subject}</h1>
                <p className="text-lg">{selectedMail.content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailSection;
