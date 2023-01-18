import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Heading = () => {
  return (
    <div className="flex bg-black items-center">
      <AiOutlineMenu className="bg-[#2B76DA] text-white text-5xl p-2 mr-5" />
      <h2 className="text-white text-xl">Lookout Mail</h2>
    </div>
  );
};

export default Heading;
