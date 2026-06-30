import React from "react";
import { Link } from "react-router-dom";
// import { FaBars, FaUsers, FaHome, FaClipboardList, FaCheckCircle, FaMap, FaChartBar, FaUserCog, FaCog, FaUser, FaSignOutAlt } from "react-icons/fa";
import headImage from "../../Assets/Social Register Dashboard/socialLogoHead.svg";
import classes from "./Sidebar.module.css";
import { NavLink } from "react-bootstrap";

function Sidebar() {
  return (
    <aside className={classes.sidebarContainer}>
      <div className={classes.headImage}>
      <img src={headImage}/></div>


       {/* <ul style={{listStyle: "none"}}>
          <h6>MAIN</h6>
          <li>
            <NavLink 
              to="/">
              Dashboard
            </NavLink>
          </li>
       </ul>



          <ul style={{listStyle: "none"}}>
            <li><Link style={{textDecoration: "none", color: "#F8FAFC", fontFamily: "sans-serif", fontWeight: "500", fontSize: "15px"}} to="/dashboard/socialregisterdashboard">Dashboard</Link></li>
            <li><Link style={{textDecoration: "none", color: "white", fontFamily: "sans-serif", fontWeight: "bolder", fontSize: "20px"}} to="/dashboard/users">Beneficiaries</Link></li>
            <li><Link style={{textDecoration: "none", color: "white", fontFamily: "sans-serif", fontWeight: "bolder", fontSize: "20px"}} to="/dashboard/socialregisterdashboard">Households</Link></li>
            <li><Link style={{textDecoration: "none", color: "white", fontFamily: "sans-serif", fontWeight: "bolder", fontSize: "20px"}} to="/dashboard/settings">Registrations</Link></li>
          </ul> */}
     



        <div className={classes.sidebar}>
      
      {/* Top Logo */}
      {/* <div className="logo">
        <h3>OGUN STATE</h3>
        <p>Social Registry</p>
      </div> */}

      {/* MAIN */}
      <div className={classes.section}>
        <p>MAIN</p>

        <div className={classes.menuItem}>
           <span>Dashboard</span>
        </div>

        <div className={classes.menuItem}>
           <span>Beneficiaries</span>
        </div>

        <div className={classes.menuItem}>
           <span>Households</span>
        </div>

        <div className={classes.menuItem}>
           <span>Registrations</span>
        </div>
      </div>

      {/* MANAGEMENT */}
      <div className={classes.section}>
        <p>MANAGEMENT</p>

        <div className={classes.menuItem}>
           <span>Verifications</span>
        </div>

        <div className={classes.menuItem}>
           <span>Districts / Zones</span>
        </div>

        <div className={classes.menuItem}>
           <span>Reports</span>
        </div>

        <div className={classes.menuItem}>
           <span>User Management</span>
        </div>
      </div>

      {/* SYSTEM */}
      <div className={classes.section}>
        <p>SYSTEM</p>

        <div className={classes.menuItem}>
           <span>Settings</span>
        </div>

        <div className={classes.menuItem}>
           <span>Account</span>
        </div>

        <div className={classes.menuItem}>
           <span>Logout</span>
        </div>
      </div>

    </div>


    </aside>

   
    
  );
}

export default Sidebar;