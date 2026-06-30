import React, { useState, useEffect } from "react";
import classes from "./Consent.module.css";
// import Olarms from '../../assets/olarmslogo.svg'
// import QRIcon from '../../assets/hhh.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BASE_URL } from '../api/api';
// import axios from 'axios';
// import {QRCodeSVG} from 'qrcode.react';
// import logo from "../../assets/olarmslogo.svg";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
// import logo from "../../assets/ogunlogo.png";
// import Preloader from "../../Component/Preload/Preloader";
// import Qr from '../src/products/qr.jpeg'
// import state from '../src/products/state.jpeg'
// import numberToWords from "number-to-words";
import ogunlogo from  "../../Assets/ogunlogo.png";




const Consent = () => {
  return (
    
    <div className={classes.body}>
      <div>
            <div className={classes["document-page"]}>
                <div className={classes.numberAddress}>
                <h6>MPPUD/2026/LUC/44/DED </h6> 
                <p>April, 2026</p>
                </div><br/>
                <div className={classes.newAddress}>
                    <h6>KH, TETRA NIGERIA LIMITED</h6>
                    <b><p>c/o TPL Talabi Olamide Rufus</p></b>
                    <p>Comtop Consult</p>
                    <p>4, Olorombo Street, Ijeun-Titun,</p>
                    <p>Abeokuta Ogun State</p>
                </div>

            {/* Content Section with Table */}
            <section className={classes.content}>
                <h2>
                LANDUSE CLEARANCE ON PROPOSED PETROL FILLING STATION ALONG ABEOKUTA/IBADAN ROAD, ELEWERAN, ABEOKUTA, ODEDA LOCAL GOVERNMENT AREA OGUN STATE FOR KH. TETRA NIGERIA LIMITED
                </h2>

                <div>
                    <p style={{fontSize: "14px", textAlign: "left"}}>
                        Sequel to your application dated 20st January, 2026 in respect of the above subject matter: <br/>I am directed to inform you that <b>LAND USE CLEARANCE</b> has been granted in respect of the Proposed Petrol Filling Station for <b>KH. TETRA NIGERIA LIMITED</b>, based on the following conditions:
                    </p>
                    <ol className={classes.romanList}>
                        <li>
                            That the plot size is 1464.001Sq. mts, with dimensions and beacons as shown on your survey Plan No OG/4890/2025/056 signed by Surveyor Jolaoso Yusuf Ajibola Dated 21st July, 2025.
                        </li>
                        <li>
                            That the Proposed Petrol Filling Station shall adhere strictly to all impact mitigating measures stated in the Physical Planning Assessment Report as well as the details specifications and conditions that may be attached to the subsequent planning permit.
                        </li>
                        <li>
                            The expiration of this Approval is within 6 months of the receipt of this letter.
                        </li>
                    </ol>
                
                </div>

                <ol className={classes.numberList}>
                <li >
                    An endorsed copy each of the Physical Planning Assessment Report and architectural plans are hereby attached for submission at the Ogun State Planning and Development Permit Authority, for Planning Permit Processing.
                </li>
                <li>
                    Ogun State Planning and Development Permit Authority should ensure due diligence before issuance of Planning Permit.
                </li>  
                </ol>  
                <p style={{textAlign: "left", fontSize: "14px"}}>Congratulations.</p>
            </section>

            <div className={classes.signatoryBox}>
                <p><b>TPl. Aleburu, Felicia Adebisi</b><br/>
                    <i>
                    Director Physical Planning<br/>
                    For: Permanent Secretary   
                </i>
                </p>
            </div>
            </div>
      </div>
      
    </div>
  );
};

export default Consent;
