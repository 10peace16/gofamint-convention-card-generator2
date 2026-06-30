import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./ProcurementLanding.module.css";
import logoHead from "../../Assets/Procurement/procurement.svg";
import { Row, Button, Col, Pagination } from "react-bootstrap";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import stroke from "../../Assets/Procurement/stroke.svg";
import { Form, InputGroup } from "react-bootstrap";
import searchIcon from "../../Assets/Procurement/search.svg";
import image1 from "../../Assets/Procurement/image1.svg";
import image2 from "../../Assets/Procurement/image2.svg";
import image3 from "../../Assets/Procurement/image3.svg";
import image4 from "../../Assets/Procurement/image4.svg";
import houseIcon from "../../Assets/Procurement/houseIcon.svg";
import handshake from "../../Assets/Procurement/handshake.svg";
import image01 from "../../Assets/Procurement/image01.svg";
import image02 from "../../Assets/Procurement/image02.svg";
import image03 from "../../Assets/Procurement/image03.svg";
import { Tab, Tabs } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import imageAll1 from "../../Assets/Procurement/imageAll1.svg";
import imageAll2 from "../../Assets/Procurement/imageAll.svg";
import imageAll3 from "../../Assets/Procurement/imageAll3.svg";
import locationIcon2 from "../../Assets/Procurement/locationIcon.svg";
import emailIcon from "../../Assets/Procurement/EmailIcon.svg";
import phoneIcon from "../../Assets/Procurement/PhoneIcon.svg";
import BackgroundImage from "../../Assets/BackgroundImage.jpg";
import procurementLogo from "../../Assets/Procurement/procurementLogo.svg"


function ProcurementLandingPage() {
    const[expanded, setExpanded] = useState(false);
    const[searchTerm, setSearchTerm] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [showStroke, setShowStroke] = useState(false);

    const fullText = "Transparent Procurement for Ogun State";

    useEffect(() => {
        const typingSpeed = 80; // ms per character
        const resetDelay = 3000; // ms before restarting
        let timeout;

        if (displayText.length < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
                setShowStroke(true);
            }, typingSpeed);
        } else if (displayText.length === fullText.length) {
            timeout = setTimeout(() => {
                setDisplayText("");
                setShowStroke(false);
            }, resetDelay);
        }

        return () => clearTimeout(timeout);
    }, [displayText]);
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

const search = (e) => {
        setSearchTerm(e.target.value);
    }
    // Sample adverts and pagination state
    const adverts = [
        { id: 1, title: 'Invitation For Bids (IFB) - Procurement of Health Commodities', excerpt: 'DRUG MANAGEMENT AGENCY has responsibility to procure, store and distribute medicines, medical and other medical consumables in Ogun State.' },
        { id: 2, title: 'RE: Invitation for Prequalification by BPP', excerpt: 'The Ogun State Bureau of Public Procurement now invites interested eligible applicants to submit applications for Prequalification to participate in this Prequalification exercise' },
        { id: 3, title: 'Advertisement for Prequalification to All Contractors', excerpt: 'The Ogun State Economic Transformation Project (OGSTEP) plans to construct feeder roads and irrigation systems in various farming communities across the state' },
        { id: 4, title: 'Advertisement for Prequalification to All Contractors', excerpt: 'The Ogun State Economic Transformation Project (OGSTEP) plans to construct feeder roads and irrigation systems in various farming communities across the state' },
        { id: 5, title: 'Invitation For Bids (IFB) - Civil Works', excerpt: 'Civil works for new community health centres across the state' },
        { id: 6, title: 'Invitation For Bids (IFB) - Supply of IT Equipment', excerpt: 'Supply and installation of desktops and networking equipment for Ministries' },
        { id: 7, title: 'Invitation For Bids (IFB) - Road Maintenance', excerpt: 'Maintenance of selected state roads and drainage channels' },
        { id: 8, title: 'Invitation For Bids (IFB) - School Furniture', excerpt: 'Supply of school furniture for public schools' }
    ];

    // news data for cards section
    const newsItems = [
        { id: 1, img: imageAll1, date: '22 Jan 2026', category: 'Procurement Notice', title: 'Renovation of Public Health Facilities', desc: 'The Bureau invites qualified contractors to submit bids for the renovation of selected public health facilities across the state.' },
        { id: 2, img: imageAll2, date: '22 Jan 2026', category: 'Public Announcements', title: 'Public Procurement Awareness Programme', desc: 'The Bureau announces an upcoming awareness programme aimed at improving compliance with procurement regulations.' },
        { id: 3, img: imageAll3, date: '18 Jan 2026', category: 'Platform Updates', title: 'New Vendor Registration Portal', desc: 'Updated guidelines for vendor registration and document submission processes.' }
    ];

    const [activeTab, setActiveTab] = useState('Procurement Adverts');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(adverts.length / itemsPerPage);
    const visibleAdverts = adverts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    }
    const [Tab2, setTab2] = useState("All");

  return (
      <div className={classes.pageEnter}>
                <Row className={classes.header}>
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
            <Row className="d-block">
                <Col style={{textAlign: "center"}}>
                    <div className={classes.titleStrokeContainer} style={{marginTop: "90px"}}>
                        <h1 style={{fontFamily: "Arial", fontWeight: "600", lineHeight: "1.2", minHeight: "60px", margin: "0 0 -25px 0"}}>{displayText}</h1>
                        {showStroke && <div style={{display: "flex", justifyContent: "center"}}><img src={stroke} style={{width: "210px"}}/></div>}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: "center", marginTop: "5px"}}><p style={{fontFamily: "sans-serif"}}>Access government tenders, submit bids, and track procurement <br/> processes securely - all in one place</p></Col>
            </Row>
            <Row>
                <Col xs={{span: 6, offset: 3}} className={classes.registerCompany}  >
                    <Button onClick={handleRegister} style={{ borderRadius: "20px", padding: "8px 25px", color: "white", background: "#047857" , border: "none", fontFamily: "sans-serif" }}>Register your company</Button>
                    <Button onClick={handleLogin} style={{ borderRadius: "20px", padding: "8px", width: "75px", color: "#047857", background: "white", border: "1.9px solid #047857", fontFamily: "sans-serif"}}>Login</Button>
                </Col>
            </Row>
            <Row style={{marginTop: "30px", justifyContent: "center"}}>
                <Col xs={{span: 8}} style={{ display: "flex", justifyContent: "center"}}>
                    <InputGroup style={{width: "600px"}}>
                        <InputGroup.Text style={{background: "transparent", border: "none", position: "absolute", zIndex: "10", left: "5px", top: "10px"}}>
                            <img src={searchIcon} style={{width: "20px", height: "20px"}}/>
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Search tenders, contracts, or procurement opportunities..." value={searchTerm} onChange={search} style={{textAlign: "left", paddingLeft: "50px", opacity: "0.6", borderRadius: "25px", padding: "15px 20px 15px 50px",  background: "white", fontSize: "15px", fontFamily: "sans-serif", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb"}}/>
                    </InputGroup>
                </Col>
            </Row>
            <Row style={{marginTop: "40px"}}>
                <Col><img className={classes.hoverZoom} src={image1} style={{marginLeft: "50px", width: "324px", height: "382px"}}/></Col>
                <Col><img className={classes.hoverZoom} src={image2} style={{marginTop: "75px", width: "264px", height: "306px"}}/></Col>
                <Col><img className={classes.hoverZoom} src={image3} style={{marginTop: "75px", width: "264px", height: "306px"}}/></Col>
                <Col><img className={classes.hoverZoom} src={image4} style={{marginRight: "50px" , width: "324px", height: "382px"}}/></Col>
            </Row>
            <Row style={{marginTop: "100px", justifyContent: "center", marginBottom: "50px"}}>
                <Col xs={{span: 4}}><h3 style={{fontFamily: "sans-serif", color: "#1F2937", fontWeight: "bold", textAlign: "left", marginLeft: "22px", lineHeight: "40px"}}>A <span style={{color: "#15803D", fontFamily: "sans-serif", fontWeight: "bold"}}>Trusted</span> Platform for<br/>Public Procurement</h3></Col>
                <Col xs={{span: 4, offset: 3}}><p style={{fontFamily: "sans-serif", color: "#374151", textAlign: "left", fontWeight: "500", fontSize: "15px", marginLeft: "30px"}}>The Ogun State E-Procurement Platform provides a<br/>centralized, transparent, and secure system for<br/>managing public procurement activities across the state</p></Col>
            </Row>
            <div className={classes.featureSection}>
               
                <div className={classes.centerCircleOuter}>
                        <div className={classes.centerCircleInner}>
                <div className={classes.centerCircle}>
                    <img src={houseIcon} alt="Building" />
                </div>
                        </div>
                </div>

                <div className={classes.left}></div>
                <div className={classes.right}></div>

                {/* transparency */}
                <div className={`${classes.card} ${classes.cardTL} ${classes.mainBox}`}>
                    <div className={classes.circle}><img src={handshake} className={classes.cardIcon} alt="icon" /></div>
                    <div className={classes.mainText}><h6>Transparency</h6>
                    <p>Ensuring open and accountable procurement processes</p></div>
                </div>

                {/* compliance */}
                <div className={`${classes.card} ${classes.cardTR} ${classes.mainBox}`}>
                    <div className={classes.circle}><img src={handshake} className={classes.cardIcon} alt="icon" /></div>
                    <div className={classes.mainText}><h6>Compliance</h6>
                    <p>Aligned with Ogun State procurement laws and guidelines</p></div>
                </div>

                {/* efficiency */}
                <div className={`${classes.card} ${classes.cardBL} ${classes.mainBox}`}>
                     <div className={classes.circle}><img src={handshake} className={classes.cardIcon} alt="icon" /></div>
                     <div className={classes.mainText}>
                        <h6>Efficiency</h6>
                    <p>Digitizing procurement to reduce delays and paperwork</p>
                     </div>
                </div>

                {/* accessibility */}
                <div className={`${classes.card} ${classes.cardBR} ${classes.mainBox}`}>
                     <div className={classes.circle}><img src={handshake} className={classes.cardIcon} alt="icon" /></div>
                     <div className={classes.mainText}>
                        <h6>Accessibility</h6>
                    <p>Providing equal access to procurement opportunities</p>
                    </div>
                </div>
            </div>
            
            <Row style={{marginTop: "50px", justifyContent: "center", marginBottom: "50px", background: "#FFFFFF", height: "600px"}}>
                <Col xs={{span: 4}}style={{marginTop: "60px", marginRight: "130px"}}><h3 style={{fontFamily: "sans-serif", color: "#1F2937", fontWeight: "bold", textAlign: "left", marginLeft: "66px", lineHeight: "40px"}}>Driving <span style={{color: "#15803D", fontFamily: "sans-serif", fontWeight: "bold"}}>Accountable</span><br/>Public Procurement</h3></Col>
                <Col xs={{span: 5, offset: 1}}style={{marginTop: "60px", marginRight: "65px", height: "150px"}}><p style={{fontFamily: "sans-serif", color: "#374151", textAlign: "left", fontWeight: "500", fontSize: "15px", marginLeft: "60px"}}>Designed to support Ministries, Departments, Agencies, and vendors<br/>through a secure and standardized procurement process</p><Button onClick={handleRegister} style={{ borderRadius: "20px", padding: "8px 25px", color: "white", background: "#047857" , border: "none", fontFamily: "sans-serif", marginRight: "300px", marginTop: "5px", fontSize: "12px" }}>Read more about us</Button></Col>
            
            <Row style={{gap: "65px", justifyContent: "center", alignItems: "center", height: "617px"}}>
                <Col xs={4} style={{background: "#F3F4F6", height: "259px", width: "393px", borderRadius: "24px", marginBottom: "250px"}}>
                <Row style={{padding: "15px", gap: "2px"}}>
                    <Col><h3 style={{fontFamily: "sans-serif", color: "#9CA3AF", marginTop: "70px", fontWeight: "bold"}}>01<br/><span style={{color: "black", fontFamily: "sans-serif", fontSize: "17px"}}>Our Vision</span></h3></Col>
                    <Col><img src={image01}/></Col>
                </Row>
                
                <Row>
                    <Col><p style={{fontFamily: "sans-serif", fontSize: "14px", color: "#6B7280", textAlign: "left", width: "305px", marginLeft: "18px", marginBottom: "15px"}}>To promote transparency, fairness, and<br/> efficiency in public procurement<br/> through digital innovation</p></Col>
                </Row>

                </Col>
                <Col xs={4} style={{background: "#F3F4F6", width: "393px", height: "259px", borderRadius: "24px", marginBottom: "250px"}}>
                        <Row style={{padding: "15px", gap: "2px"}}>
                    <Col><h3 style={{fontFamily: "sans-serif", color: "#9CA3AF", marginTop: "70px", fontWeight: "bold"}}>02<br/><span style={{color: "black", fontFamily: "sans-serif", fontSize: "17px"}}>Our Mission</span></h3></Col>
                    <Col><img src={image02}/></Col>
                </Row>
                
                <Row>
                    <Col><p style={{fontFamily: "sans-serif", fontSize: "14px", color: "#6B7280", textAlign: "left", width: "305px", marginLeft: "18px", marginBottom: "15px"}}>To provide a secure electronic procurement<br/> system that improves access, compliance,<br/> and service delivery across Ogun State</p></Col>
                </Row>
                </Col>
                <Col xs={4}style={{background: "#F3F4F6", width: "393px", height: "259px", borderRadius: "24px", marginBottom: "250px"}}>
                        <Row style={{padding: "15px", gap: "2px"}}>
                    <Col><h3 style={{fontFamily: "sans-serif", color: "#9CA3AF", marginTop: "70px", fontWeight: "bold"}}>03<br/><span style={{color: "black", fontFamily: "sans-serif", fontSize: "17px"}}>Our Mandate</span></h3></Col>
                    <Col><img src={image03}/></Col>
                </Row>
                
                <Row>
                    <Col><p style={{fontFamily: "sans-serif", fontSize: "14px", color: "#6B7280", textAlign: "left", width: "305px", marginLeft: "18px", marginBottom: "15px"}}>To serve as the official platform for publishing<br/> procurement information and managing bidding<br/> processes for public institutions</p></Col>
                </Row>
                </Col>
            </Row>
            </Row>

            <Row>
                <Col><h3 style={{color: "#047857", fontFamily: "sans-serif", fontWeight: "bold", lineHeight: "40px", textAlign: "center"}}>Procurement Transparency<br/>and Track Record</h3><p style={{fontFamily: "sans-serif", fontSize: "14px"}}>Official procurement notices and recognised milestones of accountability</p></Col>
            </Row>
            {/* <Tabs act id="uncontrolled-tab-example" 
                defaultActiveKey={activeTab} onSelect={(k) => { setActiveTab(k); setCurrentPage(1); }} className={`mb-5 complete-tabs ${classes.procTabs}`} variant="none"color="#2D995F">
                <Tab eventKey="Procurement Adverts" title={<div style={{fontSize: '16px', fontWeight: '500'}} className={activeTab==='Procurement Adverts' ? classes.activeTab : ''}>Procurement Adverts</div>}>
                
                    <div className={classes.advertsSection}>
                        {visibleAdverts.map(ad => (
                            <div key={ad.id} className={classes.adCard}>
                                <div className={classes.adLeft}>
                                    <div className={classes.openBadge}>Open</div>
                                    <h5 className={classes.adTitle}>{ad.title}</h5>
                                    <p className={classes.adExcerpt}>{ad.excerpt}</p>
                                </div>
                                <div className={classes.adRight}>
                                    <Button style={{background: '#047857', border: 'none', borderRadius: '16px', padding: '8px 12px'}}>Download Files</Button>
                                </div>
                            </div>
                        ))}

                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '18px'}}>
                            <Pagination>
                                <Pagination.Prev onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
                                {Array.from({length: totalPages}).map((_, i) => (
                                    <Pagination.Item key={i+1} active={i+1 === currentPage} onClick={() => goToPage(i+1)}>{i+1}</Pagination.Item>
                                ))}
                                <Pagination.Next onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
                            </Pagination>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="Awards and Recognitions" title={<span style={{fontSize: '16px', fontWeight: '500', width: "3500px"}} className={activeTab==='Awards and Recognitions' ? classes.activeTab : ''}>Awards and Recognitions</span>}>
                    <div style={{padding: '18px'}}>No entries to show yet.</div>
                </Tab>
            </Tabs> */}

        <Tabs 
        defaultActiveKey = {activeTab} onSelect ={(k) => {setActiveTab(k)}} className="custom-tabs" justify variant="none" >
            <Tab eventKey="Procurement Adverts" title={<div style={{fontSize: '16px', fontWeight: '500', fontFamily: "sans-serif"}} className={activeTab==='Procurement Adverts' ? classes.activeTab : ''} >Procurement Adverts</div>}>
                          <div className={classes.advertsSection}>
                             {visibleAdverts.map(ad => (
                            <div key={ad.id} className={classes.adCard}>
                                <div className={classes.adLeft}>
                                    <div className={classes.openBadge}>Open</div>
                                    <h5 className={classes.adTitle}>{ad.title}</h5>
                                    <p className={classes.adExcerpt}>{ad.excerpt}</p>
                                </div>
                                <div className={classes.adRight}>
                                    <Button style={{background: '#047857', border: 'none', borderRadius: '16px', padding: '8px 12px'}}>Download Files</Button>
                                </div>
                            </div>
                        ))}

                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '18px'}}>
                            <Pagination>
                                <Pagination.Prev onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
                                {Array.from({length: totalPages}).map((_, i) => (
                                    <Pagination.Item key={i+1} active={i+1 === currentPage} onClick={() => goToPage(i+1)}>{i+1}</Pagination.Item>
                                ))}
                                <Pagination.Next onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
                            </Pagination>
                        </div>
                    </div>
            </Tab>

            <Tab eventKey="Awards and Recognitions" title={<div style={{fontSize: '16px', fontWeight: '500',  fontFamily: "sans-serif"}} className={activeTab==='Awards and Recognitions' ? classes.tab2 : ''} >Awards and Recognitions</div>}> 
                       <div className={classes.advertsSection}>
                             {visibleAdverts.map(ad => (
                            <div key={ad.id} className={classes.adCard}>
                                <div className={classes.adLeft}>
                                    <div className={classes.openBadge}>Open</div>
                                    <h5 className={classes.adTitle}>{ad.title}</h5>
                                    <p className={classes.adExcerpt}>{ad.excerpt}</p>
                                </div>
                                <div className={classes.adRight}>
                                    <Button style={{background: '#047857', border: 'none', borderRadius: '16px', padding: '8px 12px'}}>Download Files</Button>
                                </div>
                            </div>
                        ))}

                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '18px'}}>
                            <Pagination>
                                <Pagination.Prev onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
                                {Array.from({length: totalPages}).map((_, i) => (
                                    <Pagination.Item key={i+1} active={i+1 === currentPage} onClick={() => goToPage(i+1)}>{i+1}</Pagination.Item>
                                ))}
                                <Pagination.Next onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
                            </Pagination>
                        </div>
                    </div>
             
            </Tab>
        </Tabs>

        {/* news and announcements */}
        <div style={{background: "#F3F4F6", padding: "3px", marginTop: "20px", height: "760px",}}>
            <Row style={{marginTop: "50px", marginLeft: "55px"}}>
                <div style={{width: "100%"}}>
                    <h3 style={{textAlign: "left", color: "#047857", fontFamily: "sans-serif", fontWeight: "400"}}>News and Announcements</h3>
                    <p style={{textAlign: "left", color: "#6B7280", fontFamily: "sans-serif", fontWeight: "400", fontSize: "12px"}}>Stay informed with the latest procurement-related updates and notices</p>
                </div>
            </Row>
            <div style={{display: 'flex', gap: '25px', marginLeft: '55px', marginTop: "9px"}}>
                <div onClick={() => setTab2('All')} style={{fontSize: '14px',  fontFamily: "sans-serif", padding: '6px 12px', borderRadius: '100000000px' , width: "70px", marginLeft: "10px", backgroundColor: Tab2==='All' ? '#D1FAE5' : "#F9FAFB", boxShadow: "0 2px 6px rgba(16,24,40,0.06)", color: Tab2==='All' ? '#065F46' : "black", cursor: 'pointer'}} >All</div>
                <div onClick={() => setTab2('Procurement Notice')} style={{fontSize: '14px',  fontFamily: "sans-serif", padding: '6px 12px', borderRadius: '100000000px', backgroundColor: Tab2==='Procurement Notice' ? '#D1FAE5' : "#F9FAFB", boxShadow: "0 2px 6px rgba(16,24,40,0.06)", color: Tab2==='Procurement Notice' ? '#065F46' : "black", cursor: 'pointer'}} >Official Procurement Notices</div>
                <div onClick={() => setTab2('Platform Updates')} style={{fontSize: '14px',  fontFamily: "sans-serif", padding: '6px 12px', borderRadius: '100000000px', backgroundColor: Tab2==='Platform Updates' ? '#D1FAE5' : "#F9FAFB", boxShadow: "0 2px 6px rgba(16,24,40,0.06)", color: Tab2==='Platform Updates' ? '#065F46' : "black", cursor: 'pointer'}} >Platform Updates</div>
                <div onClick={() => setTab2('Public Announcements')} style={{fontSize: '14px',  fontFamily: "sans-serif", padding: '6px 12px', borderRadius: '100000000px', backgroundColor: Tab2==='Public Announcements' ? '#D1FAE5' : "#F9FAFB", boxShadow: "0 2px 6px rgba(16,24,40,0.06)", color: Tab2==='Public Announcements' ? '#065F46' : "black", cursor: 'pointer'}} >Public Announcements</div>
            </div>

            {/* filtered news cards */}
            <div className={classes.newsRow}>
                {(Tab2 === 'All' ? newsItems : newsItems.filter(n=>n.category === Tab2)).map(item => (
                    <div key={item.id} style={{marginLeft: "70px", flex: "0 0 calc(33.333% - 47px)", minWidth: "300px"}}>
                        <div className={classes.newsCard}>
                            <img src={item.img} alt="news" className={classes.newsImg} />
                            <div className={classes.newsContent}>
                                <div className={classes.newsHeader}>
                                    <span className={classes.newsDate}>{item.date}</span>
                                    <span className={item.category === "Procurement Notice" ? classes.newsCategory : item.category === "Public Announcements" ? classes.newsCategory2: item.category === "Platform Updates" ? classes.newsCategory: ""}>{item.category}</span>
                                </div>
                                <h5 className={classes.newsTitle}>{item.title}</h5>
                                <p className={classes.newsDesc}>{item.desc}</p>
                                <Button variant="link" className={classes.readMore}>Read More</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>      
        <Row style={{background: "#047857", justifyContent: "center", alignItems: "center",  height: "360px" }}>
                <Col style={{marginTop: "40px"}}><h3 style={{fontFamily: "sans-serif", color: "#FFFFFF", fontWeight: "bold", padding: "5px"}}>Ready to participate in Ogun State procurement?</h3>
                <p style={{fontFamily: "sans-serif", color: "#FFFFFF", fontSize: "12px", textAlign: "center", padding: "5px"}}>Register your company to access procurement adverts, submit bids, and<br/> participate in public procurement opportunities</p>
                     <Button onClick={handleRegister} style={{ borderRadius: "10000000px", color: "#047857", background: "#F9FAFB" , border: "none", fontFamily: "sans-serif", fontSize: "14px", width: "180px", height: "40px", padding: "5px" }}>Register your company</Button>
                </Col>
        </Row>     

        <Row style={{marginTop: "50px"}}>
                <Col><h3 style={{fontFamily: "sans-serif", fontWeight: "bold", color: "#047857"}}>Get in Touch</h3>
                    <p style={{fontFamily: "sans-serif", fontSize: "14px"}}>Have questions or need assistance? Reach out to us</p>
                </Col>
        </Row>

        <Row style={{marginTop: "20px", justifyContent: "center", gap: "70px"}}>
            <Col xs={3} style={{textAlign: "center", display: "flex", justifyContent: "center", gap: "10px", alignItems: "center"}}>
                <Col xs={1}style={{background: "#D1FAE5", borderRadius: "50%",  width: "60px", height: "60px", alignContent: "center", marginTop: "-18px"}}><img src={locationIcon2} style={{width: "30px", height: "30px"}} alt="Location" /></Col>
                <Col xs={7}><h6 style={{color: "#1E293B", fontFamily: "sans-serif", textAlign: "left", fontWeight: "600"}}>Address</h6>
                <p style={{fontSize: "10px", color: "#1E293B", textAlign: "left", fontFamily: "sans-serif"}}>Bureau Of Public Procurement, Oke-Ilewo, Abeokuta, Ogun State</p></Col>
                
            </Col>

            <Col xs={3} style={{textAlign: "center", display: "flex", justifyContent: "center", gap: "10px", alignItems: "center"}}>
                <Col xs={1}style={{background: "#D1FAE5", borderRadius: "50%",  width: "60px", height: "60px", alignContent: "center", marginTop: "-18px"}}><img src={emailIcon} style={{width: "30px", height: "30px"}} alt="email" /></Col>
                <Col xs={7}><h6 style={{color: "#1E293B", fontFamily: "sans-serif", textAlign: "left", fontWeight: "600"}}>Mail</h6>
                <p style={{fontSize: "10px", color: "#1E293B", textAlign: "left", fontFamily: "sans-serif"}}>info@ogunprocurement.gov.ng</p></Col>
                
            </Col>
            
            <Col xs={3} style={{textAlign: "center", display: "flex", justifyContent: "center", gap: "10px", alignItems: "center"}}>
                <Col xs={1}style={{background: "#D1FAE5", borderRadius: "50%",  width: "60px", height: "60px", alignContent: "center", marginTop: "-18px"}}><img src={phoneIcon} style={{width: "30px", height: "30px"}} alt="Phone" /></Col>
                <Col xs={7}><h6 style={{color: "#1E293B", fontFamily: "sans-serif", textAlign: "left", fontWeight: "600"}}>Phone</h6>
                <p style={{fontSize: "10px", color: "#1E293B", textAlign: "left", fontFamily: "sans-serif"}}>+234-807 3060 709</p></Col>
                
            </Col>
        </Row>                     
            <Row style={{justifyContent: "center", marginTop: "40px"}}>
              <Button onClick={handleRegister} style={{ borderRadius: "10000000px", color: "#FFFF", background: "#047857" , border: "none", fontFamily: "sans-serif", fontSize: "12px", width: "200px", height: "40px", padding: "5px", textAlign: "center" }}>Contact us</Button>
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
                        <Col  style={{display: "flex", marginLeft: "150px", gap: "170px"}}>
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
                    <Col xs={3} style={{display: "flex", gap: "30px", marginLeft: "85px"}}>
                        <div>
                            <a href="#"><p className={classes.term}>Terms of Services</p></a>
                        </div>
                        <div>
                            <a href="#"><p className={classes.privacy}>Privacy Policy</p></a>
                        </div>
                    </Col>
                </Row>
            </Row>
              
        </div>
    );
}

export default ProcurementLandingPage;
