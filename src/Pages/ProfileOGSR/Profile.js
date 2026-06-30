import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Profile.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import NIN from "../../Assets/Social Register Dashboard/Profile/NIN.svg";
import calendar from "../../Assets/Social Register Dashboard/Profile/Caledar.svg";
import gender from "../../Assets/Social Register Dashboard/Profile/Gender.svg";
import location from "../../Assets/Social Register Dashboard/Profile/Location.svg";
import ward from "../../Assets/Social Register Dashboard/Profile/Ward.svg";
import regstatus from "../../Assets/Social Register Dashboard/Profile/RegStatus.svg";
import {Form, FormGroup} from "react-bootstrap";


function Profile() {

  return (
    <div className={classes.mainBox} >
        <Row className={classes.mainBoxTop}>
            <Col xs={12} md={5}>
                <div className={classes.welcomeBackDiv}>
                    <h6>– ACCOUNT</h6>
                    <h3>My Profile</h3>
                    <p>Your personal details and account settings</p>
                </div>
            </Col>
        </Row>


        <Row style={{marginTop: "20px"}}>
            <Col xs={8} md={4}>
                <div className={classes.profileBox}>
                    <div className={classes.profileHeader}>
                        <div className={classes.initial}><h3>AA</h3></div>
                        <div className={classes.itemText1}>
                            <h6>Adunola Akinyemi</h6>
                            <p>Head of Household · OG-HH-2026-04917</p>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={NIN}/>
                        </div>
                        <div>
                            <p>NIN</p><h6>.......4917</h6>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={calendar}/>
                        </div>
                        <div>
                            <p>DATE OF BIRTH</p><h6>14 March 1988</h6>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={gender}/>
                        </div>
                        <div>
                            <p>GENDER</p><h6>Female</h6>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={location}/>
                        </div>
                        <div>
                            <p>LGA</p><h6>Abeokuta South</h6>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={ward}/>
                        </div>
                        <div>
                            <p>WARD</p><h6>Adatan</h6>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={regstatus}/>
                        </div>
                        <div>
                            <p>REGISTRATION STATUS</p><h6 style={{color: "#D97706"}}>Pending Verification</h6>
                        </div>
                    </div>
                </div>
            </Col>

            <Col xs={12} md={8}>
                <div style={{ padding: "35px", borderRadius: "16px", border: "0.5px solid #16A34A", background: "white" }}>
                    
                    <Row style={{marginTop: "10px"}}>
                        <div className={classes.itemTitle}>
                            <h6>CONTACT INFORMATION</h6>
                        </div>
                            <Col xs={12} md={6}>
                                <Form.Group >
                                        <Form.Label className={classes.label}>Email</Form.Label>
                                            <Form.Control 
                                            type="email"
                                            placeholder="a.adeyemi@gmail.com"
                                            className={classes.input}
                                        />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className={classes.label}>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="+234 - 800 123 4567" className={classes.input} />
                                </Form.Group>
                            </Col>
                    </Row>
                    <Row style={{marginTop: "10px"}}>
                         <Col xs={12} md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label className={classes.label}>Home Address</Form.Label>
                                    <Form.Control type="address" placeholder="14 Adatan Road, Abeokuta South" className={classes.input} />
                                </Form.Group>
                            </Col>
                    </Row>
                    <div className={classes.buttonDiv}>
                        <Button>Save Changes</Button>
                    </div>

                    
                    
                    <Row style={{marginTop: "30px"}}>

                        <div className={classes.itemTitle}>
                            <h6>CHANGE PASSWORD</h6>
                        </div>

                        <Col xs={12} md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label className={classes.label}>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="enter current password" className={classes.input} />
                                </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "10px"}}>
                        <Col xs={12} md={6}>
                                    <Form.Group >
                                            <Form.Label className={classes.label}>New Password</Form.Label>
                                                <Form.Control 
                                                type="password"
                                                placeholder="enter new password"
                                                className={classes.input}
                                            />
                                    </Form.Group>
                            </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className={classes.label}>Confirm New Password</Form.Label>
                                        <Form.Control type="password" placeholder="re-enter new password" className={classes.input} />
                                    </Form.Group>
                                </Col>
                        <div className={classes.buttonDiv}>
                            <Button>Update Password</Button>
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>

    </div>
  );
}

export default Profile;