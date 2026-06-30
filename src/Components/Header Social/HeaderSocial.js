import React from "react";
import classes from "./HeaderSocial.module.css";
import { Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LogoName from "../../Assets/Social Register Dashboard/LogoImageName.svg";
import HomeIcon from "../../Assets/Social Register Dashboard/HomeIconHousehold.svg";
import householdMember from "../../Assets/Social Register Dashboard/householdMember.svg";
import assistance from "../../Assets/Social Register Dashboard/assistance.svg";
import applicationStatus from "../../Assets/Social Register Dashboard/applicationStatus.svg";
import profile from "../../Assets/Social Register Dashboard/profile.svg";
import bellIcon from "../../Assets/Social Register Dashboard/bellIconHousehold.svg";

function HeaderSocial() {

const[expanded, setExpanded] = useState(false);
// const [activeLink, setActiveLink] = useState("home");

// const handleLinkClick = (link) => {
//     setActiveLink(link);
// };

const [clickNotification, setClickNotification] = useState(false);

const handleNotificationClick = () => {
    setClickNotification(prevState => !prevState);
}

const handleToggle = () => {
    setExpanded(expanded => !expanded);
}
const handleClose = () => {
    setExpanded(false);
}

  return (
    <>
        <Row className={classes.header}>
            <Col xs={2}>
            <img src={LogoName}/></Col>
                <Col xs={{span: 8}} className={classes.NavContainer}>
                    <Navbar expand="lg" expanded={expanded}>
                        
                        <Navbar.Toggle  onClick={handleToggle} className={classes.navToggle}/>
                  
                        <Navbar.Collapse id="basic-navbar-nav" className={classes.navCollapse}>
                            <Nav className={classes.navItem}>
                                <NavLink  to="/dashboard" end className={({ isActive }) => isActive ? classes.navLinkActive : classes.navLink}>
                                    <img src={HomeIcon} className={classes.NavIcon}/>
                                    <span>Home</span>
                                </NavLink>
                                <NavLink  className={({ isActive }) => isActive ? classes.navLinkActive : classes.navLink} to="/dashboard/household">
                                    <img src={householdMember} className={classes.NavIcon}/>
                                    <span>Household Members</span>
                                </NavLink>
                                <NavLink  className={({ isActive }) => isActive ? classes.navLinkActive : classes.navLink} to="/dashboard/assistance">
                                    <img src={assistance} className={classes.NavIcon}/>
                                    <span>Apply for Assistance</span>
                                </NavLink>
                                <NavLink  className={({ isActive }) => isActive ? classes.navLinkActive : classes.navLink} to="/dashboard/application">
                                    <img src={applicationStatus} className={classes.NavIcon}/>
                                    <span>Application Status</span>
                                </NavLink>
                                <NavLink  className={({ isActive }) => isActive ? classes.navLinkActive : classes.navLink} to="/dashboard/profile">
                                    <img src={profile} className={classes.NavIcon}/>
                                    <span>My Profile</span>
                                </NavLink>
                            </Nav>   
                              <img src={bellIcon} className={`${classes.NavBellIcon} ${clickNotification && classes.bellNotification }`} onClick={handleNotificationClick}/>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>             
        </Row>

        {/* <Row>
            <Col xs={5}>
                <div className={classes.welcomeBackDiv}>
                    <h6>– WELCOME BACK</h6>
                    <h3>Adunola Adeyemi</h3>
                    <p>Your household registration is currently pending verification. A field agent will contact you within 10–14 working days</p>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            
            </Col>
            
            <Col xs={5}>
            
            </Col>
        </Row> */}
 
    </>
  );
}

export default HeaderSocial;