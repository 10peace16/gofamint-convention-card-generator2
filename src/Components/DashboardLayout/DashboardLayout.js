import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function DashboardLayout() {
  return (
    <div>
      <Row>
        <Col xs={2}>
        <div>
          <Sidebar />
        </div>
        </Col>  
        <Col xs={10}>
        <div>
          <Outlet />
        </div>
        </Col>
      </Row>
      
      {/* <div style={{ flex: 1 }}>
        
        <Outlet />
      </div> */}
    </div>
  );
}

export default DashboardLayout;