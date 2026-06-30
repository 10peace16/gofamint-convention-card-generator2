import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function DashboardHome() {
  return (
    <div style = {{ background: "red" }}>
        <h1 style={{color: "white"}}>HELLO PEOPLE</h1>
    </div>
  );
}

export default DashboardHome;