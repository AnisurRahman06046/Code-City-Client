import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Pages/Header/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid lg:grid-cols-3">
        <div>left side nav bar</div>
        <div className="col-span-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
