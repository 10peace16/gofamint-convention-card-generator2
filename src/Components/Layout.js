import React from "react";
import HeaderSocial from "./Header Social/HeaderSocial";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <HeaderSocial />
      <div style={{ flex: 1 }}>
        
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;