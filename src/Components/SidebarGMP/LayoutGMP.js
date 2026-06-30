import React from "react";
import SidebarGMP from "./SidebarGMP";
import classes from "./LayoutGMP.module.css";
import SearchBar from "../SearchBarGMP/SearchBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{display: "flex"}}>
      <div style={{ flex: "1"}}>
        <SidebarGMP />
      </div>
      
      <div style={{ padding: "20px 20px 20px 0"}}>
        <SearchBar />        
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;