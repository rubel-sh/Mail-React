import React from "react";
import { Outlet } from "react-router-dom";
import MailSection from "../components/Dashboard/MailSection/MailSection";
import NavSide from "../components/Dashboard/NavSide/NavSide";
import Heading from "../components/Heading/Heading";

const MainLayout = () => {
  return (
    <div>
      <Heading />
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-slate-200">
          <NavSide />
        </div>
        <div className="col-span-9 bg-yellow-100">
          <MailSection />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
