import * as React from "react";
import HeaderContaner from "../Header/HeaderContaner";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <HeaderContaner />
      <Outlet />
    </div>
  );
};

export default Layout;
