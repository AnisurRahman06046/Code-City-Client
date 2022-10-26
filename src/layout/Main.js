import React from "react";

import { Outlet } from "react-router-dom";
import Faq from "../components/Pages/Faq/Faq/Faq";
import Header from "../components/Pages/Header/Header/Header";
import LeftSideNav from "../components/Pages/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid lg:grid-cols-3  container mx-auto">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
