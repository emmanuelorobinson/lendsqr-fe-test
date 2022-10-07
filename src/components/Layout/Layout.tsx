import "./Layout.scss";

import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="sidebar">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
