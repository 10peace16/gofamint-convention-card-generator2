import React from "react";
import classes from "./Certificate.module.css";
import logo from "../../Assets/ogunLogo.svg";
import barcode from "../../Assets/certificateBarCode.svg";
import { Row, Col, Table } from "react-bootstrap";

function Certificate() {
  return (
    <div className={classes.body}>
        <div className={classes.border}>
            <div className={classes.waterMark}><h1 className={classes.certified}>CERTIFIED</h1></div>
                <Row >
                    <img src={logo} className={classes.logo}/>
                </Row>
                <Row className="m-y-5">
                    <h1 className={classes.heading}>OGUN STATE GOVERNMENT</h1> <br/><h3 className={classes.heading2}>Bureau of Public Procurement</h3>
                </Row>
                <Row className={classes.content}>
                    <h2 className={classes.subHeading}>CERTIFICATE OF REGISTRATION</h2><br/>
                    {/* <div className={classes.content}> */}
                        <h4 style={{fontSize: "14px" }}>This is to certify that</h4> <br/> <h2 style={{fontSize: "24px", color: "#CA8A04", fontWeight: 700}}>[Company Name]</h2><br/><h4 style={{fontSize: "14px", lineHeight: "20px"}}>with</h4> <br/>
                        <h2 className={classes.certNum}>CERTIFICATE NO: OGBPP/REG/2026/00123</h2><br/>
                        <i><h4 style={{fontSize: "12px", lineHeight: "17px", color: "#0F172A", fontWeight: 400}}>is duly registered and recognized as an approved vendor, in<br/> compliance with relevant laws and regulations</h4></i>
                    {/* </div> */}
                </Row>
                <Row>
                    <table className={classes.table}>
                        <tr style={{border: "1px solid black", textAlign: "left"}}>
                            <td style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>Company Name</td>
                            <th style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>COMPANY NAME</th>
                        </tr>
                        <tr style={{border: "1px solid black", textAlign: "left"}}>
                            <td style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>Vendor ID</td>
                            <th style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>OGBPP/REG/2026/00123</th>
                        </tr>
                        <tr style={{border: "1px solid black", textAlign: "left"}}>
                            <td style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>Business Category</td>
                            <th style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>GOODS & SERVICES</th>
                        </tr>
                        <tr style={{border: "1px solid black", textAlign: "left"}}>
                            <td style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>RC Number</td>
                            <th style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>1234567</th>
                        </tr>
                        <tr style={{border: "1px solid black", textAlign: "left"}}>
                            <td style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>Tax ID</td>
                            <th style={{border: "1px solid black", textAlign: "left", padding: "10px"}}                 >12345678-0001</th>
                        </tr>
                        <tr style={{border: "1px solid black", textAlign: "left"}}>
                            <td style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>Registration Date</td>
                            <th style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>dd-mm-yyyy</th>
                        </tr>
                        <tr style={{border: "1px solid black", textAlign: "left"}}>
                            <td style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>Expiry Date</td>
                            <th style={{border: "1px solid black", textAlign: "left", padding: "10px"}}>dd-mm-yyyy</th>
                        </tr>
                    </table>
                </Row>
                <Row>
                     <Col>
                        <h4 style={{fontSize: "14px", marginTop: "25px", fontFamily: 'Times New Roman',
                            textAlign: "center"}}>
                            This certificate is valid for one (1) year from the date of issuance, subject to<br/>compliance with applicable laws and regulations.
                        </h4>
                    </Col>
                </Row>
                <Row style={{marginTop: "25px"}}>
                    <Col className={classes.signatorySection}>
                        <hr className={classes.signatureLine}/>
                        <h4 className={classes.signatoryName}>Dr. Adesina Olanloye</h4>
                        <p className={classes.signatoryTitle}>Director-General,<br/>Ogun State Bureau of Public Procurement</p>
                    </Col>
                    <Col className={classes.barcodeSection}>
                        <img src={barcode} className={classes.qrCode} alt="QR code" />
                    </Col>
                </Row>
            
        </div>
    </div>
  );
}

export default Certificate;
