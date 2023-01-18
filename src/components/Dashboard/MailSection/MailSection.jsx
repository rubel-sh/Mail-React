import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdMailOpen } from "react-icons/io";
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
      <Outlet />
    </div>
  );
};

export default MailSection;
