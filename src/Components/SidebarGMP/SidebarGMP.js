import React, { useState, useEffect } from "react";
import classes from "./SidebarGMP.module.css";
import { Offcanvas } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import imageLogoText from "../../Assets/GMP/logoImageText.svg";
import iconSidebar from "../../Assets/GMP/iconSidebar.svg";

function SidebarGMP() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [show, setShow] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});

    const location = useLocation();

    const toggleShow = () => setShow(prev => !prev);

    const toggleExpand = (item) => {
        setExpandedItems(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);

            if (!mobile) setShow(false);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ✅ FIXED MENU (added paths + proper submenu objects)
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: "📊", path: "/dashboard", submenu: [] },
        { id: "artists", label: "Artists", icon: "🎤", path: "/artists", submenu: [] },
        { id: "investors", label: "Investors", icon: "💰", path: "/investors", submenu: [] },
        { id: "earnings", label: "Earnings", icon: "💵", path: "/earnings", submenu: [] },
        { id: "fans", label: "Fans", icon: "👥", path: "/fans", submenu: [] },

        {
            id: "rap",
            label: "Rap Battle",
            icon: "🎤",
            submenu: [
                { label: "Rap Battle", path: "/rap-battle" },
                { label: "Rap 1", path: "/rap-1" },
                { label: "Rap 2", path: "/rap-2" }
            ]
        },

        { id: "bookings", label: "Bookings", icon: "📅", path: "/bookings", submenu: [] },
        { id: "celebrity", label: "Celebrity", icon: "⭐", path: "/celebrity", submenu: [] },
        { id: "notifications", label: "Notifications", icon: "🔔", path: "/notifications", submenu: [] },

        {
            id: "beats",
            label: "Beats",
            icon: "🎵",
            submenu: [
                { label: "Afro", path: "/beats/afro" },
                { label: "Hip-pop", path: "/beats/hiphop" },
                { label: "Pop", path: "/beats/pop" },
                { label: "Rock", path: "/beats/rock" },
                { label: "Reggae", path: "/beats/reggae" }
            ]
        }
    ];

    // ✅ AUTO EXPAND ACTIVE PARENT
    useEffect(() => {
        menuItems.forEach(item => {
            if (item.submenu?.some(sub => sub.path === location.pathname)) {
                setExpandedItems(prev => ({
                    ...prev,
                    [item.id]: true
                }));
            }
        });
    }, [location.pathname]);

    const renderMenu = () => (
        <ul className={classes.menuList}>
            {menuItems.map(item => {
                const hasSubmenu = item.submenu?.length > 0;

                return (
                    <li key={item.id}>
                        {/* ✅ MAIN ITEM */}
                        <NavLink
                            to={hasSubmenu ? "#" : item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? `${classes.menuItem} ${classes.active}`
                                    : classes.menuItem
                            }
                            onClick={(e) => {
                                if (hasSubmenu) {
                                    e.preventDefault();
                                    toggleExpand(item.id);
                                }
                            }}
                        >
                            <span className={classes.icon}>{item.icon}</span>
                            <span className={classes.label}>{item.label}</span>

                            {hasSubmenu && (
                                <span className={classes.arrow}>
                                    {expandedItems[item.id] ? "▶" : "▼"}
                                </span>
                            )}
                        </NavLink>

                        {/* ✅ SUBMENU */}
                        {expandedItems[item.id] && hasSubmenu && (
                            <ul className={classes.submenu}>
                                {item.submenu.map((subitem, idx) => (
                                    <li key={idx}>
                                        <NavLink
                                            to={subitem.path}
                                            end
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${classes.submenuItem} ${classes.active}`
                                                    : classes.submenuItem
                                            }
                                        >
                                            {subitem.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div>
            {/* 📱 MOBILE BUTTON */}
            {isMobile && (
                <div className={classes.toggleIcon} onClick={toggleShow}>
                    {!show && <img src={iconSidebar} alt="Menu" />}
                </div>
            )}

            {/* 📱 MOBILE */}
            {isMobile ? (
                <Offcanvas
                    show={show}
                    onHide={toggleShow}
                    backdrop={false}
                    scroll={true}
                    style={{ width: "256px" }}
                >
                    <Offcanvas.Header className="d-flex justify-content-between">
                        <Offcanvas.Title>
                            <img src={imageLogoText} alt="Menu" />
                        </Offcanvas.Title>
                        <span onClick={toggleShow} style={{ cursor: "pointer" }}>
                            <img src={iconSidebar} alt="Close" />
                        </span>
                    </Offcanvas.Header>

                    <Offcanvas.Body className={classes.menuContainer}>
                        {renderMenu()}
                    </Offcanvas.Body>
                </Offcanvas>
            ) : (
                /* 💻 DESKTOP */
                <div className={classes.desktopSidebar}>
                    <div className={classes.menuContainer}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "30px 15px 40px 15px"
                        }}>
                            <img src={imageLogoText} alt="Menu" />
                            <img src={iconSidebar} alt="Menu" />
                        </div>

                        {renderMenu()}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SidebarGMP;