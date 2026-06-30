import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./HouseholdDashboard.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import copyIcon from "../../Assets/Social Register Dashboard/copyIcon.svg";
import warningIcon from "../../Assets/Social Register Dashboard/warningIcon.svg";
import member from "../../Assets/Social Register Dashboard/userIconAction.svg";
import assistanceIcon from "../../Assets/Social Register Dashboard/assistanceIconAction.svg";
import status from "../../Assets/Social Register Dashboard/applicationStatusAction.svg";
import profile from "../../Assets/Social Register Dashboard/profileIconAction.svg";
import member2 from "../../Assets/Social Register Dashboard/userAction2.svg";
import status2 from "../../Assets/Social Register Dashboard/applicationStatus2.svg";
import setting from "../../Assets/Social Register Dashboard/settingAction.svg";
import firstBullet from "../../Assets/Social Register Dashboard/firstBullet.svg";
import secondBullet from "../../Assets/Social Register Dashboard/secondBullet.svg";
import thirdBullet from "../../Assets/Social Register Dashboard/thirdBullet.svg";
import fourthBullet from "../../Assets/Social Register Dashboard/fourthBullet.svg";
import fifthBullet from "../../Assets/Social Register Dashboard/fifthBullet.svg";
import arrow from "../../Assets/Social Register Dashboard/arrowAction.svg";

function HouseholdDashboard() {

const[expanded, setExpanded] = useState(false);


const handleToggle = () => {
    setExpanded(expanded => !expanded);
}
const handleClose = () => {
    setExpanded(false);
}

  return (
    <div className={classes.mainBox}>
        <Row className={classes.mainBoxTop}>
            <Col xs={12} md={5}>
                <div className={classes.welcomeBackDiv}>
                    <h6>– WELCOME BACK</h6>
                    <h3>Adunola Adeyemi</h3>
                    <p>Your household registration is currently pending verification. A field agent will contact you within 10–14 working days</p>
                </div>
                <div className={classes.mainContainerRef}>
                    
                      <div className={classes.innerCont}>
                         <p className={classes.refNumber}>REFERENCE NUMBER</p>
                        <div className={classes.innerCont2}>
                            <p>OG-HH-2026-04917</p>
                            <span>
                                <img src={copyIcon} className={classes.copyIcon}/>
                            </span>
                        </div>
                    </div>

                    <div className={classes.innerCont}>
                        <p>DATE REGISTERED</p>
                        <span>14 / 03 / 2026</span>
                    </div>
                    <div className={classes.innerCont}>
                        <p>VERIFICATION</p>
                        <span className={classes.pending}>PENDING</span>
                    </div>
                </div>
            
            </Col>
            
            <Col xs={12} md={3} className={classes.householdInfo}>
                <div className={classes.householdHeader}>
                    <h6>HOUSEHOLD INFO</h6>
                </div>
                <hr/>
                <div className={classes.householdBody}>
                    <div>
                        <h6>LGA</h6>
                    </div>
                    <div>
                        <span>Abeokuta South</span>
                    </div>
                </div>
                <div className={classes.householdBody}>
                    <div>
                        <h6>Ward</h6>
                    </div>
                    <div>
                        <span>Adatan</span>
                    </div>
                </div>
                <div className={classes.householdBody}>
                    <div>
                        <h6>Household Size</h6>
                    </div>
                    <div>
                        <span>4 members</span>
                    </div>
                </div>
                <div className={classes.householdBody}>
                    <div>
                        <h6>Application</h6>
                    </div>
                    <div>
                        <span>2 submitted</span>
                    </div>
                </div>
                <div className={classes.warningBox}>
                    <div><img src={warningIcon}/></div>
                    <div><p><span>Next Step:</span> Field agent visit scheduled for Mar 28, 2026. Ensure someone is home</p></div>
                </div>
            </Col>
        </Row>


        <Row style={{marginTop: "30px"}}>
            <Col xs={12} md={4}>
                <div style={{ padding: "30px", borderRadius: "16px", border: "0.5px solid #16A34A", background: "white" }}>
                    <div className={classes.itemText1}>
                        <h6>Recent Activity</h6>
                        <p>Lastest updates on your registration</p>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={firstBullet}/>
                        </div>
                        <div>
                            <p>Your household registration was submitted successfully<br/><span>Mar 14, 2026</span></p>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={secondBullet}/>
                        </div>
                        <div>
                            <p>Application for Cash Transfer Programme Submitted<br/><span>Mar 15, 2026</span></p>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={thirdBullet}/>
                        </div>
                        <div>
                            <p>Food Support Programme application approved<br/><span>Mar 25, 2026</span></p>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={fourthBullet}/>
                        </div>
                        <div>
                            <p>Household member Tunde Adeyemi added<br/><span>Mar 26, 2026</span></p>
                        </div>
                    </div>
                    <div className={classes.itemText2}>
                        <div>
                            <img src={fifthBullet}/>
                        </div>
                        <div>
                            <p>Household member Tunde Adeyemi added<br/><span>Mar 26, 2026</span></p>
                        </div>
                    </div>
                </div>
            </Col>

            <Col xs={12} md={5}>
                <div style={{ padding: "30px", borderRadius: "16px", border: "0.5px solid #16A34A", background: "white" }}>
                    <div className={classes.itemText1}>
                        <h6>Quick Actions</h6>
                    </div>
                    <div className={classes.quickActionBox}>
                        <div className={classes.quickAction}>
                            <div>
                               <img src={member}/>   
                            </div>
                            <div>
                                <p>Add Household Member</p>
                            </div>
                        </div>
                        <div>
                            <Button className={classes.quickActionButton}>
                                <img src={arrow}/>
                            </Button>
                        </div>
                    </div>
                     <div className={classes.quickActionBox}>
                        <div className={classes.quickAction}>
                            <div>
                               <img src={assistanceIcon}/>   
                            </div>
                            <div>
                                <p>Add Household Member</p>
                            </div>
                        </div>
                        <div>
                            <Button className={classes.quickActionButton}>
                                <img src={arrow}/>
                            </Button>
                        </div>
                    </div>
                     <div className={classes.quickActionBox}>
                        <div className={classes.quickAction}>
                            <div>
                               <img src={status}/>   
                            </div>
                            <div>
                                <p>Add Household Member</p>
                            </div>
                        </div>
                        <div>
                            <Button className={classes.quickActionButton}>
                                <img src={arrow}/>
                            </Button>
                        </div>
                    </div>
                    <div className={classes.quickActionBox}>
                        <div className={classes.quickAction}>
                            <div>
                               <img src={profile}/>   
                            </div>
                            <div>
                                <p>Add Household Member</p>
                            </div>
                        </div>
                        <div>
                            <Button className={classes.quickActionButton}>
                                <img src={arrow}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>

            <Col xs={12} md={3}>
                <div style={{borderRadius: "16px", display: "flex", flexDirection: "column", gap: "15px", padding: "1px"}}>
                    <div className={classes.thirdBox}>
                        <div className={classes.quickAction}>
                            <div>
                               <img src={member2}/>   
                            </div>
                            <div className={classes.subThirdBox}>
                                <div>
                                    <h6>4</h6>
                                </div>
                                <div>
                                    <p>Household Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.thirdBox}>
                        <div className={classes.quickAction}>
                            <div>
                               <img src={status2}/>   
                            </div>
                            <div className={classes.subThirdBox}>
                                <div>
                                    <h6>2</h6>
                                </div>
                                <div>
                                    <p>Applications Submitted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.thirdBox}>
                        <div className={classes.quickAction}>
                            <div>
                               <img src={setting}/>   
                            </div>
                            <div className={classes.subThirdBox}>
                                <div>
                                    <h6>1</h6>
                                </div>
                                <div>
                                    <p>Assistance Approved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

    </div>
  );
}

export default HouseholdDashboard;