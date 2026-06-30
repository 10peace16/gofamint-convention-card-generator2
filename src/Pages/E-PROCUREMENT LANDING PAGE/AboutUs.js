import React from "react";
import {Row, Col} from "react-bootstrap";
import classes from "./AboutUs.module.css";
import BackgroundImage2 from "../../Assets/Frame.png";
import nairaSign from "../../Assets/Procurement/nairaSign.svg"
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import bureaupics from "../../Assets/Procurement/bureauImage.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import imageBureau from "../../Assets/Procurement/image bureau.png";
import image01 from "../../Assets/Procurement/image01.svg";
import image02 from "../../Assets/Procurement/image02.svg";
import image03 from "../../Assets/Procurement/image03.svg";
import frameimage1 from "../../Assets/Procurement/frameicon1.svg";
import frameimage2 from "../../Assets/Procurement/frameicon.svg";
import frameimage3 from "../../Assets/Procurement/frameicon3.svg";
import frameimage4 from "../../Assets/Procurement/frameicon4.svg";
import transparent from "../../Assets/Procurement/imageTransparent.svg";
import integrity from "../../Assets/Procurement/imageIntegrity.svg";
import flash from "../../Assets/Procurement/imageFlash.svg";
import user from "../../Assets/Procurement/imageUser.svg";
import check from "../../Assets/Procurement/imageCheck.svg";
import money from "../../Assets/Procurement/imageMoney.svg";
import accountability from "../../Assets/Procurement/imageAccountability.svg";
import monitor from "../../Assets/Procurement/imageMonitor.svg";
import BackgroundImage from "../../Assets/BackgroundImage.jpg";
import logoHead from "../../Assets/Procurement/procurement.svg";
import procurementLogo from "../../Assets/Procurement/procurementLogo.svg";
import { ListGroup } from "react-bootstrap";


function AboutUs() {

    const[expanded, setExpanded] = useState(false);

    const handleToggle = () => {
    setExpanded(expanded => !expanded);
}
const handleClose = () => {
    setExpanded(false);
}
    const navigate = useNavigate();

    const handleLogin = () => {
    navigate("/login");
}
    const handleRegister = () => {
    navigate("/register");
}




    const itemCore = [
        {id: 1, img: transparent, header: "Transparency", body: "All procurement processes are open, documented, and accessible to the public and stakeholders." }, {id: 2, img: integrity, header: "Integrity", body: "Upholding the highest ethical standards in every decision, contract, and vendor interaction."}, {id: 3, img: flash, header: "Efficiency", body: "Digitising procurement to eliminate delays, reduce paperwork, and improve turnaround time."}, {id: 4, img: user, header: "Accessibility", body: "Equal access to procurement opportunities for all eligible vendors regardless of size."}, {id: 5, img: check, header: "Compliance", body: "Aligned with Ogun State procurement laws, national regulations, and global best practices."}, {id: 6, img: money, header: "Value for Money", body: "Ensuring every public naira spent delivers maximum benefit to the people of Ogun State."}, {id: 7, img: accountability, header: "Accountability", body: "Every action is traceable, every decision is documented, and results are publicly reported."}, {id: 8, img: monitor, header: "Innovation", body: "Continuously improving our digital tools and processes to serve a growing procurement ecosystem."} 
    ]
  return (
    <div style={{background: "#F9FAFB"}}>

           <Row className={classes.mainHeader}>
                    <Col xs={2}><img src={logoHead}/></Col>
                    <Col xs={{span: 9, offset: 1}}>
                    <Navbar expand="lg" expanded={expanded}>
                        
                        <Navbar.Toggle  onClick={handleToggle} className={classes.navToggle}/>
                  
                        <Navbar.Collapse id="basic-navbar-nav" className={classes.navCollapse}>
                            <Nav className={classes.navItem}>
                                <Nav.Link onClick={handleClose} style={{fontFamily: "sans-serif"}}>Projects</Nav.Link>
                                <Nav.Link onClick={handleClose} style={{fontFamily: "sans-serif"}}>Monthly Reports</Nav.Link>
                                <Nav.Link onClick={handleClose} style={{fontFamily: "sans-serif"}}>Open Data</Nav.Link>
                                <NavDropdown title={<span style={{fontFamily: "sans-serif"}}>Open Document</span>} style={{fontFamily: "sans-serif"}}>
                                    <NavDropdown.Item className={classes.navDropItem}>Action 1</NavDropdown.Item>
                                    <NavDropdown.Item className={classes.navDropItem}>Action 2</NavDropdown.Item>
                                    <NavDropdown.Item className={classes.navDropItem}>Action 3</NavDropdown.Item>
                                    <NavDropdown.Item className={classes.navDropItem}>Action 4</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link style={{fontFamily: "sans-serif"}}>FAQ</Nav.Link><Row>
                            <Button onClick={handleLogin} style={{ borderRadius: "20px", marginTop: "2px", marginLeft: "50px", padding: "8px", width: "75px", color: "#047857", background: "white", border: "1.9px solid #047857", fontFamily: "sans-serif"}}>Login</Button><Button onClick={handleRegister} style={{ borderRadius: "20px", marginTop: "2px", marginLeft: "25px", padding: "8px", width: "85px", color: "white", background: "#047857" , border: "none", fontFamily: "sans-serif" }}>Register</Button>
                                </Row>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    </Col>
            </Row>
        <Row style={{
                    /* use gradient overlay for stronger tint */
                    /* lighten tint so base color shows through more */
                    backgroundImage: `url(${BackgroundImage2})`,
                    backgroundSize: 'cover',
                    objectFit: "contain",
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                }}>

            <Col>
                <Navbar className={classes.navbar}>
                    <Nav.Link href="#" className={classes.breadcrumb}>Home</Nav.Link>
                    <span className={classes.breadcrumbSeparator}> > </span>
                    <Nav.Link href="#" className={classes.breadcrumb}>About Us</Nav.Link>
                </Navbar>
                
                <div className={classes.contentContainer}>
                    <h4 className={classes.heading}>
                        About the <span className={classes.highlight}>Bureau of<br/> Public Procurement</span>
                    </h4>
                    <p className={classes.description}>
                        The official platform for transparent, efficient, and accountable procurement across all Ministries, Departments, and Agencies in Ogun State.
                    </p>
                </div>
            </Col>
        </Row>
        <Row className={classes.statsRow}>
            <Col xs={3} className={classes.statBox}>
                <div className={classes.statTop1}>
                    <img src={nairaSign} alt="Naira" className={classes.statIcon} />
                    <span className={classes.statNumber}>2.4B+</span>
                </div>
                <div className={classes.statLabel1}>Total Procurement Value (2025)</div>
            </Col>

            <Col xs={3} className={classes.statBox}>
                <div className={classes.statTop}>
                    <span className={classes.statNumber}>1,200+</span>
                </div>
                <div className={classes.statLabel}>Registered Vendors</div>
            </Col>

            <Col xs={3} className={classes.statBox}>
                <div className={classes.statTop}>
                    <span className={classes.statNumber}>340+</span>
                </div>
                <div className={classes.statLabel}>Active Procurement Adverts</div>
            </Col>

            <Col xs={3} className={classes.statBox}>
                <div className={classes.statTop}>
                    <span className={classes.statNumber}>26 MDAs</span>
                </div>
                <div className={classes.statLabel}>Ministries &amp; Agencies Served</div>
            </Col>
        </Row>
        <Row className={classes.history}>
            {/* Our Story */}
            <Col>
                <h6 className={classes.story}><hr className={classes.line}/> OUR STORY</h6>
                <h4 className={classes.header}>A History of <span className={classes.accountable}>Accountable</span> Governance</h4>
                <div className={classes.section}>
                <Col><p>The Bureau of Public Procurement (BPP) of Ogun State was established under the Ogun State Public Procurement Law to serve as the regulatory authority for all public procurement activities across the state.</p>
            </Col> 
            <Col className={classes.subSection}>
               <hr className={classes.verticalLine}/>
            <p>Our mandate is to ensure that every public naira spent on procurement<br/> is done openly, fairly, and in strict compliance with established regulations."</p></Col>

            <Col><p>The Bureau oversees the procurement of works, goods, and services by all Ministries, Departments, and Agencies (MDAs) of the Ogun State Government, ensuring value for money and promoting fair competition among vendors and contractors.</p></Col>

            <Col><p>The introduction of the E-Procurement platform marks a significant milestone — digitalising procurement processes to reduce paperwork, cut delays, and enhance accessibility for businesses across the state and beyond.</p></Col> 
            </div>
            </Col>
            
            <Col>
                <img src={bureaupics} className={classes.bureaupics}/>
                
                <div style={{display: "flex", gap: "30px", alignItems: "flex-start", marginTop: "40px", marginLeft: "35px"}}>
                   
                        <div className={classes.groupLine}>
                            <img src={frameimage1} className={classes.frameImage}/>
                            <hr className={classes.verticalLine2A}/>
                        </div>
                    <div className={classes.textPurposeCont}>
                            <p className={classes.title}>ESTABLISHMENT</p>
                            <p className={classes.subTitle}>Bureau of Public Procurement Founded</p>
                            <p className={classes.subPurpose}>Established under Ogun State Public Procurement Law as the state’s central procurement authority</p>
                    </div>
                </div>

                <div style={{display: "flex", gap: "30px", alignItems: "flex-start", marginTop: "30px", marginLeft: "35px" }}>
                  
                        <div className={classes.groupLine}>
                            <img src={frameimage2} className={classes.frameImage}/>
                            <hr className={classes.verticalLine2B}/>
                        </div>
                    <div className={classes.textPurposeCont}>
                            <p className={classes.title}>REGULATION</p>
                            <p className={classes.subTitle}>Procurement Guidelines Issued</p>
                            <p className={classes.subPurpose}>Comprehensive procurement guidelines amd threshold regulations published for all MDAs.</p>
                    </div>
                </div>

                 <div style={{display: "flex", gap: "30px", alignItems: "flex-start", marginTop: "30px", marginLeft: "35px"}}>
                
                        <div className={classes.groupLine}>
                            <img src={frameimage3} className={classes.frameImage}/>
                            <hr className={classes.verticalLine2C}/>
                        </div>
                    <div className={classes.textPurposeCont}>
                            <p className={classes.title}>DIGITALISATION</p>
                            <p className={classes.subTitle}>E-Procurement Platform Launched</p>
                            <p className={classes.subPurpose}>Full digital transformation of procurement — vendors, tenders, bids, and payments all in one place.</p>
                    </div>
                </div>

                 <div style={{display: "flex", gap: "30px", alignItems: "flex-start", marginTop: "30px", marginLeft: "35px"}}>
                   
                        <div className={classes.groupLine}>
                            <img src={frameimage4} className={classes.frameImage}/>
                            <hr className={classes.verticalLine2D}/>
                        </div>
                    <div className={classes.textPurposeCont}>
                            <p className={classes.title}>TODAY</p>
                            <p className={classes.subTitle}>Continuous Improvement</p>
                            <p className={classes.subPurpose}>Ongoing enhancements to platform features, vendor onboarding, and MDA integration.</p>
                    </div>
                </div>
            </Col>
        </Row>
        
            <Row style={{gap: "65px", justifyContent: "center", alignItems: "center", height: "617px", background: "#FFFF", marginTop: "100px" }}>
                <div className={classes.purpose}>
                    <h6 className={classes.story}><hr className={classes.line2}/> PURPOSE</h6>
                    <h4 className={classes.header2}>Vision, Mission <span className={classes.accountable}>& Mandate</span> </h4>
                    <Col>
                        <p className={classes.textPurpose}>The three pillars that guide every procurement decision made through<br/> this platform and across all state institutions.</p>
                    </Col>
                </div>
                <Col xs={4} style={{background: "#F3F4F6", height: "259px", width: "393px", borderRadius: "24px", marginBottom: "20px"}}>
                    <Row style={{padding: "15px", gap: "2px"}}>
                        <Col><h3 style={{fontFamily: "sans-serif", color: "#9CA3AF", marginTop: "70px", fontWeight: "bold"}}>01<br/><span style={{color: "black", fontFamily: "sans-serif", fontSize: "17px"}}>Our Vision</span></h3></Col>
                        <Col><img src={image01}/></Col>
                    </Row>
                    
                    <Row>
                        <Col><p style={{fontFamily: "sans-serif", fontSize: "14px", color: "#6B7280", textAlign: "left", width: "305px", marginLeft: "18px", marginBottom: "15px"}}>To promote transparency, fairness, and<br/> efficiency in public procurement<br/> through digital innovation</p></Col>
                    </Row>
                </Col>
                
                <Col xs={4} style={{background: "#F3F4F6", width: "393px", height: "259px", borderRadius: "24px", marginBottom: "20px"}}>
                    <Row style={{padding: "15px", gap: "2px"}}>
                        <Col><h3 style={{fontFamily: "sans-serif", color: "#9CA3AF", marginTop: "70px", fontWeight: "bold"}}>02<br/><span style={{color: "black", fontFamily: "sans-serif", fontSize: "17px"}}>Our Mission</span></h3></Col>
                        <Col><img src={image02}/></Col>
                    </Row>
                
                    <Row>
                        <Col><p style={{fontFamily: "sans-serif", fontSize: "14px", color: "#6B7280", textAlign: "left", width: "305px", marginLeft: "18px", marginBottom: "15px"}}>To provide a secure electronic procurement<br/> system that improves access, compliance,<br/> and service delivery across Ogun State</p></Col>
                    </Row>
                </Col>

                <Col xs={4}style={{background: "#F3F4F6", width: "393px", height: "259px", borderRadius: "24px", marginBottom: "20px"}}>
                    <Row style={{padding: "15px", gap: "2px"}}>
                        <Col><h3 style={{fontFamily: "sans-serif", color: "#9CA3AF", marginTop: "70px", fontWeight: "bold"}}>03<br/><span style={{color: "black", fontFamily: "sans-serif", fontSize: "17px"}}>Our Mandate</span></h3></Col>
                        <Col><img src={image03}/></Col>
                    </Row>
                
                    <Row>
                        <Col><p style={{fontFamily: "sans-serif", fontSize: "14px", color: "#6B7280", textAlign: "left", width: "305px", marginLeft: "18px", marginBottom: "15px"}}>To serve as the official platform for publishing<br/> procurement information and managing bidding<br/> processes for public institutions</p></Col>
                    </Row>
                </Col>
            </Row>
           
            <div>
                <div className={classes.core}>
                    <h6 className={classes.story}><hr className={classes.lineCore}/> WHAT WE STAND FOR</h6>
                    <h4 className={classes.header2}>Our Core <span className={classes.accountable}>Values</span> </h4>
                    <Col>
                        <p className={classes.textPurpose}>These values shape how we operate, how we serve the public, and how<br/>we hold procurement accountable.</p>
                    </Col>
                </div>

                <div className={classes.mainBoxContainer}>
                    {itemCore.map(item => (
                    <div key={item.id}>
                        <div className={classes.mainBox}>
                            <img src={item.img} className={classes.imgItem}/>
                            <div className={classes.boxContent}>
                                
                                <h6 className={classes.headerTitle}>{item.header}</h6>
                                <p className={classes.bodyContent}>{item.body}</p>

                            </div>

                        </div>
                        
                    </div>
                ))}
                </div>
            </div>
             {/* <Row style={{justifyContent: "center", marginTop: "40px", }}>
              <Button  style={{ borderRadius: "10000000px", color: "#FFFF", background: "#047857" , border: "none", fontFamily: "sans-serif", fontSize: "12px", width: "200px", height: "40px", padding: "5px", textAlign: "center" }}>Contact us</Button>
            </Row> */}

            <Row style={{background: "#047857",  alignItems: "center",  height: "330px", marginTop: "70px" }}>
                <Col style={{}}>
                    <h3 style={{fontFamily: "sans-serif", color: "#FFFFFF", fontWeight: "bold", padding: "5px"}}>Ready to participate in Ogun State procurement?</h3>
                    <p style={{fontFamily: "sans-serif", color: "#FFFFFF", fontSize: "12px", textAlign: "center", padding: "5px"}}>Register your company to access procurement adverts, submit bids, and<br/> participate in public procurement opportunities</p>
                    <Button onClick={handleRegister} style={{ borderRadius: "10000000px", color: "#047857", background: "#F9FAFB" , border: "none", fontFamily: "sans-serif", fontSize: "14px", width: "180px", height: "40px", padding: "5px", marginTop: "10px" }}>Register your company</Button>
                </Col>
            </Row>     

             <Row
                className={classes.background}
                style={{
                    /* use gradient overlay for stronger tint */
                    /* lighten tint so base color shows through more */
                    backgroundImage: `linear-gradient(rgba(3, 65, 47, 0.87), rgb(1, 97, 70)), url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    objectFit: "contain",
                    // backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Col xs={{span: 9, offset: 1}} style={{margin: "50px"}}>
                    <Navbar expand="lg" expanded={expanded}>
                        
                        <Navbar.Toggle  onClick={handleToggle} className={classes.navToggle}/>
                  
                        <Navbar.Collapse id="basic-navbar-nav" className={classes.navCollapse}>
                            <Nav className={classes.navItem}>
                                <Nav.Link onClick={handleClose} style={{fontFamily: "sans-serif", color: "white"}}>Projects</Nav.Link>
                                <Nav.Link onClick={handleClose} style={{fontFamily: "sans-serif" , color: "white"}}>Monthly Reports</Nav.Link>
                                <Nav.Link onClick={handleClose} style={{fontFamily: "sans-serif" , color: "white"}}>Open Data</Nav.Link>
                                <NavDropdown title={<span style={{fontFamily: "sans-serif" , color: "white"}}>Open Document</span>} style={{fontFamily: "sans-serif" , color: "white"}}>
                                    <NavDropdown.Item className={classes.navDropItem}>Action 1</NavDropdown.Item>
                                    <NavDropdown.Item className={classes.navDropItem}>Action 2</NavDropdown.Item>
                                    <NavDropdown.Item className={classes.navDropItem}>Action 3</NavDropdown.Item>
                                    <NavDropdown.Item className={classes.navDropItem}>Action 4</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link style={{fontFamily: "sans-serif" , color: "white"}}>FAQ</Nav.Link>
                            
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    </Col>
                    <hr style={{width: "1340px", color: "white", marginLeft: "85px", opacity: "1"}}/>
                    <Row>
                        <Col xs={3}>
                            <img src={procurementLogo} className={classes.ogunlogo}/>
                            <p className={classes.ogunlogoText}>The Official Ogun State Government Procurement Platform</p>
                        </Col>
                        <Col  style={{display: "flex", marginLeft: "150px", gap: "190px"}}>
                            <div className={classes.platformList}>
                                <h6>PLATFORM</h6>
                                <ListGroup className={classes.menuList}>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Projects</ListGroup.Item>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Monthly Reports</ListGroup.Item>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Open Data</ListGroup.Item>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Open Document</ListGroup.Item>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">FAQs</ListGroup.Item>
                                </ListGroup>
                            </div>

                            <div className={classes.platformList}>
                                <h6>PROCUREMENT</h6>
                                <ListGroup className={classes.menuList}>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Procurement Adverts</ListGroup.Item>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Awards & Recognitions</ListGroup.Item>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">News & Announcements</ListGroup.Item>
                                </ListGroup>
                            </div>

                            <div className={classes.platformList}>
                                <h6>SUPPORT & LEGAL</h6>
                                <ListGroup className={classes.menuList}>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Contact Us</ListGroup.Item>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Register Your Company</ListGroup.Item>
                                    <ListGroup.Item className={classes.menuList} action as={Link} to="/#">Login</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>

                    <hr style={{width: "1340px", color: "white", marginLeft: "85px", opacity: "1", marginTop: "40px"}}/>

                <Row style={{marginBottom: "25px"}}>
                    <Col xs={8}>
                        <p className={classes.copyRight}>&copy; Copyright 2026. Ogun State Government Bureau of Public Procurement</p>
                    </Col>
                    <Col xs={3} style={{display: "flex", gap: "40px", marginLeft: "85px"}}>
                        <div>
                            <a href="#"><p className={classes.term}>Terms of Services</p></a>
                        </div>
                        <div>
                            <a href="#"><p className={classes.privacy}>Privacy  Policy</p></a>
                        </div>
                    </Col>
                </Row>
            </Row>

    </div>
  );
}


export default AboutUs;
