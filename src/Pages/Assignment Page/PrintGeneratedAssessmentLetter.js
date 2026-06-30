import React, { useState, useEffect } from "react";
import classes from "./Assessment.module.css";
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




const PrintGeneratedAssessmentLetter = () => {
    const [user, setUser] = useState("");
    const [bearer, setBearer] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { customer, service, paymentbreak } = location.state || {};
    console.log("Customer:", customer);
    console.log("Service:", service);
    console.log("Payment Breakdown:", paymentbreak);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [payment, setPayment] = useState([]);
    const [assessmentLetter, setAssessmentLetter] = useState("");      
    const [assessmentLetter2, setAssessmentLetter2] = useState("");      
    const [showModal, setShowModal] = useState(false);
    const [rebateValue, setRebateValue] = useState(0);
    // const [showRebate, setShowRebate] = useState(false);
    const [preLoading, setPreLoading] = useState(true);
  
    
//     const readData = async () => {
//       try {
//           const detail = await AsyncStorage.getItem('firstName');
//           const detailsd = await AsyncStorage.getItem('secondName');
//           const details = await AsyncStorage.getItem('userToken');
//           const detailss = await AsyncStorage.getItem('userEmail');
//           const value2 = await AsyncStorage.getItem("roleList");
//           const value3 = await AsyncStorage.getItem("roleList2");

          
//           if (detail !== null) {
//               // const firstName = detail.split(' ')[0];
//               setFirstName(detail);
  
//           }
//           if (detailsd !== null) {
//               // const firstName = detailsd.split(' ')[0];
//               setLastName(detailsd);
  
//           }

//           if (value2 !== null) {
//             setAssessmentLetter(JSON.parse(value2));
//             console.log(value2);
//           }

//           if (value3 !== null) {
//             setAssessmentLetter2(JSON.parse(value3));
//           }
  
//           if (detailss !== null) {
//               // const firstName = detail.split(' ')[0];
//               setEmail(detailss);
  
//           }
  
//           if (details !== null) {
//               setBearer(details);
//           }
         
//       } catch (e) {
//           alert('Failed to fetch the input from storage');
//       }
//   };
    
//       useEffect(() => {
//         readData();
//       }, []);
  
      useEffect(() => {
        const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);
      
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = addLeadingZero(currentDate.getMonth() + 1);
        const year = currentDate.getFullYear();
        const minutes = addLeadingZero(currentDate.getMinutes());
        const hours = addLeadingZero(currentDate.getHours() % 12 || 12);
        const seconds = addLeadingZero(currentDate.getSeconds());
        const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
      
        const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
      
        setCurrentDateTime(formattedDateTime);
      }, []);
      
      const { userData } = location.state || {};
     
      console.log(userData);
      const handlePrint = () => {
        window.print();
      };
  
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearer}`
      };
  
      const totalAmount = paymentbreak?.reduce((total, item) => total + (Number(item.amount) || 0), 0);

      const safeAmount = isFinite(totalAmount) ? totalAmount : 0;

      const amountParts = safeAmount.toFixed(2).split(".");
      const nairaPart = parseInt(amountParts[0]);
      const koboPart = parseInt(amountParts[1]);
      
      // Convert to words and capitalize
    //   let nairaInWords = numberToWords.toWords(nairaPart)
    //     .split(" ")
    //     .map(word => word.charAt(0).toUpperCase() + word.slice(1));
      
      // List of scale words where 'and' should not be inserted after 'Hundred'
      const scaleWords = ['Thousand', 'Million', 'Billion'];
      
      // Inject 'And' after 'Hundred' if followed by a non-scale word
    //   for (let i = 0; i < nairaInWords.length; i++) {
    //     if (
    //       nairaInWords[i] === 'Hundred' &&
    //       nairaInWords[i + 1] && // next word exists
    //       !scaleWords.includes(nairaInWords[i + 1])
    //     ) {
    //       nairaInWords.splice(i + 1, 0, 'And');
    //     }
    //   }
      
    //   nairaInWords = nairaInWords.join(" ");
      
    //   const koboInWords = koboPart > 0 ? (
    //     numberToWords.toWords(koboPart)
    //       .split(" ")
    //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //       .join(" ") + " Kobo"
    //   ) : "";
      
    //   const totalInWords = nairaInWords + " Naira" + (koboPart > 0 ? ", " + koboInWords : "") + " Only";

        
      
      const totalRebate = assessmentLetter?.specification?.reduce((sum, item) => sum + Number(item.rebate_amount), 0)


        const totalAfterRebate = totalAmount - totalRebate;

        const safeAmountRe = isFinite(totalAfterRebate) ? totalAfterRebate : 0;
          const amountPartsRe = safeAmountRe.toFixed(2).split(".");
          const nairaPartRe = parseInt(amountPartsRe[0]);
          const koboPartRe = parseInt(amountPartsRe[1]);

          // Convert to words and capitalize
        //   let nairaInWordsRe = numberToWords.toWords(nairaPartRe)
        //     .split(" ")
        //     .map(word => word.charAt(0).toUpperCase() + word.slice(1));

          // List of scale words where 'and' should not be inserted after 'Hundred'
          const scaleWordsRe = ['Thousand', 'Million', 'Billion'];

          // Inject 'And' after 'Hundred' if followed by a non-scale word
        //   for (let i = 0; i < nairaInWordsRe.length; i++) {
        //     if (
        //       nairaInWordsRe[i] === 'Hundred' &&
        //       nairaInWordsRe[i + 1] &&
        //       !scaleWordsRe.includes(nairaInWordsRe[i + 1])
        //     ) {
        //       nairaInWordsRe.splice(i + 1, 0, 'And');
        //     }
        //   }

        //   nairaInWordsRe = nairaInWordsRe.join(" ");

        //   const koboInWordsRe = koboPartRe > 0 ? (
        //     numberToWords.toWords(koboPartRe)
        //       .split(" ")
        //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        //       .join(" ") + " Kobo"
        //   ) : "";

        //   const totalInWordsRe = nairaInWordsRe + " Naira" + (koboPartRe > 0 ? ", " + koboInWordsRe : "") + " Only";

          const showRebate = assessmentLetter?.specification?.some(
            (item) => Number(item.rebate_amount) !== 0
          );
      

      const formatDateTime = (dateString) => {
        if (!dateString) return "";
      
        const date = new Date(dateString);
      
        return date.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      };
      // const fetchData1 = async () => {
      //   setIsLoading(true);
      //   try {
      //     const response = await axios.get(`${BASE_URL}/payment_details`,
      //       {
      //         headers,
      //         params: { id: assessmentLetter.id }
      //       });        
      //     // const roleList = response.data?.data[0];      
      //     // const customer = response.data?.data[0]?.customer;      
      //     // const applicationdocs = response.data?.data[0]?.application_document;      
      //     const payment = response.data?.data[0];      
      //     console.log(payment, ".LLSKKS");
      //     // setCustomer(customer);
      //     setPayment(payment);
      //   } catch (error) {
      //     if (error.response && error.response.status === 401) {
      //       // Redirect to login page if unauthorized
      //       navigate('/login');
      //     } else {
      //       const errorStatus = error.response?.data?.message;
      //       console.log(errorStatus);
      //       setPayment([]);
      //     }
      //   } finally {
      //     setIsLoading(false);
      //   }
      // };
    
    
      // useEffect(() => {
      //   if (bearer) {
      //     // fetchData();
      //     fetchData1();
      //     // fetchData3();
      //   }
      // }, [bearer]);

    
      const handlePrintWithRebate = () => {
        setShowModal(true);
      };
    
      const handleModalClose = () => {
        setShowModal(false);
      };
    
      // const handleRebateSubmit = (e) => {
      //   e.preventDefault();
      //   setShowRebate(true);
      //   setShowModal(false);
      // };

      const offerTypes = {
        "1": "PROVISIONAL OFFER OF RATIFICATION",
        "2": "PROVISIONAL OFFER OF ALLOCATION IN",
        "3": "RE: APPLICATION FOR GOVERNOR'S CONSENT TO ASSIGN INTEREST IN",
        "4": "PROVISIONAL OFFER FOR RIGHT OF OCCUPANCY ON"
      };

      const sentenceOffer = {
        "1": "provisional offer of ratification",
        "2": "provisional offer of allocation",
        "3": "application for governor's consent",
        "4": "provisional offer for grant of Right of Occupancy "
      };
    
      const sentenceOffer2 = {
        "1": "accommodation",
        "2": "accommodation",
        "3": "balance of Consent",
        "4": "accommodation"
      };
    
      const calculateRebate = (amount) => {
        return (rebateValue / 100) * amount;
      };
    
      const calculateTotal = (amount) => {
        return amount - calculateRebate(amount);
      };

    //   useEffect(() => {
    //     // Simulate data fetching or setup
    //     const timer = setTimeout(() => {
    //       setPreLoading(false);
    //     }, 2000);
    
    //     return () => clearTimeout(timer);
    //   }, []);
    
    //   if (preLoading) {
    //     return <Preloader />;
    //   }

  return (
    
    <div className={classes.body}>
          {/* <Button variant="success" onClick={handlePrintWithRebate} className={classes.rebate}>
            Print with rebate %
        </Button> */}

      <div>
        <div className={classes["document-page"]}>
          <div className={classes.iml}>
            {/* <img src={logo} className='state' /> */}
          </div>
          <div className={classes.img}>
            {/* <img src={Qr} className='Qr' /> */}
            {/* <img src={Qr} className='Qr' /> */}
          </div>
          <h1 className={classes["document-title"]}>
          {/* <div className={classes.iml}> */}
            <div className={classes.printRow}>
              <Col md={3}>
                {/* <QRCodeSVG value={assessmentLetter?.payment_url} size={100}/> */}
              </Col>
              <Col md={6}>
                <img src={ogunlogo} className={classes.state} />
              </Col>
              <Col md={3}>
              {/* <QRCodeSVG value={customer?.payment_url} 
              size={70}
              level="M"
              /> */}
              <p>How to pay</p>
              </Col>
            </div>
            <br />
          {/* </div> */}
            <span className={classes.titleText}>
              BUREAU OF LANDS AND SURVEY
            </span>
            <br /> <span className={classes.locationText}>OFFICE OF THE GOVERNOR</span>
            <br /> 
            BLOCK D, NEW SECRETARIAT, 
            OKE-MOSAN, <br/> ABEOKUTA, OGUN STATE OF NIGERIA
          </h1>
          <br />

          {/* Subtitle */}
          {customer?.payment_code &&(
          <h2 className={classes["document-subtitle"]}>
            PAYMENT CODE: {customer?.payment_code}
          </h2>
          )}

          {/* Paragraph with address on both ends */}
          <div className={classes["address-section"]}>
            <p className={classes["left-address"]}> <b>
              {/* Dear Sir/Ma, <br /> */}
              {/* {assessmentLetter?.application_number} <br /> */}
              {customer?.name?.toUpperCase() || ""}
              {/* <br /> {assessmentLetter?.customer?.address} */}
            </b>
            </p>
            <p className={classes["right-address"]}>
              <b>
                {formatDateTime(customer?.updated_at)}
              <br /> OW/SL/IND.114 {customer?.phone}
              </b>
            </p>
          </div>

          {/* Content Section with Table */}
          <section className={classes.content}>
            <h2>
              RENT DEMAND NOTICE
            </h2>
            <table style={{border: "1px solid black", width: "100%", marginBottom: "20px"}}>
                <thead>
                    <tr className={classes.tableContent}>
                        <td className={classes.labelTable}>APPLICANT'S FULL NAME:</td>
                        <td colSpan={3} className={classes.tableContent}>REDAVIS DEVELOPMENT COMPANY LIMITED</td>
                    </tr>
                    
                        <tr className={classes.tableContent}>
                       <td className={classes.labelTable}>ADDRESS:</td>
                        <td colSpan={3} className={classes.tableContent}>10A, CONNAL ROAD, YABA, LAGOS STATE</td>
                        </tr>

                         <tr className={classes.tableContent}>
                       <td className={classes.labelTable}>PLOT NO:</td>
                        <td className={classes.tableContent}>NIL</td>
                        <td className={classes.labelTable}>BLOCK NO</td>
                        <td className={classes.tableContent}>NIL</td>
                        </tr>

                         <tr >
                       <td className={classes.labelTable}>PLOT SIZE:</td>
                        <td className={classes.tableContent}>10.010 HECTARES</td>
                        <td className={classes.labelTable}>PLOT USE:</td>
                        <td className={classes.tableContent}>INDUSTRY</td>
                        </tr>

                        <tr className={classes.tableContent}>
                        <td className={classes.labelTable}>TITLE REGISTRATION:</td>
                        <td className={classes.tableContent}>17/17/1038</td>
                        </tr>
                </thead>
            </table>
            
            <p className={classes.pText}>Dear Sir/Ma,</p>
            <Row className={classes.mainRow}>
                <Col xs={7}className={classes.FirstCol}>GROUND RENT DEMAND NOTICE IN RESPECT OF LAND SITUATE AT:</Col>
                <Col xxs={5} className={classes.SecondCol}>LYING AND BEING WITHIN FLOWERGATE EXTENSION ALONG ABEOKUTA/SAGAMU EXPRESSWAY, BARA VILLAGE, OBAFEMI OWODE</Col>
            </Row>
            <p className={classes.pText}>This is to bring to your notice and remind you of the ground rent demand notice in respect of the above subject matter<br/> has fallen due. The details are as shown in the table below </p>

            <table>
                <th>
                    DESCRIPTION
                </th>
                <th>
                    PERIOD
                </th>
                <th>
                    AMOUNT
                </th>
                <tr>
                    <td>mond</td>
                    <td>money</td>
                    <td>dmdkd</td>
                    <td>jajkklf</td>
                </tr>
            </table>
            {/* <table>
                <tr>
                    <td className={classes.leftHeader1} >GROUND RENT DEMAND NOTICE IN RESPECT OF LAND SITUATE AT:
                    </td>
                          <td className={classes.rightHeaderBox} >LYING AND BEING WITHIN FLOWERGATE EXTENSION ALONG ABEOKUTA/SAGAMU EXPRESSWAY, BARA VILLAGE, OBAFEMI OWODE</td>
                </tr>
                
            </table> */}

            {/* <p className={classes.refeer}>
              {" "}
              {customer?.type == 3 &&(
              <b>ASSIGNEE: {customer?.name?.toUpperCase() || ""}              
              <br />
              <br />
              </b> 
              )}
              Refer to above subject matter, please.
              <br />
              <br /> I am directed to inform you that <b>His Excellency, Prince Dapo Abiodun CON</b> has graciously 
                    considered your request and approved the {sentenceOffer[customer?.type] || ""} at the above 
                    described location based on the following terms and conditions: 
              <br />
              <br />{" "}
            </p> */}

            {/* <table className={classes["content-table1"]}>
              <thead className={classes.thead1}>
                <tr className={classes.theadTh}>
                  <th>Terms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type of use: </td>

                  <td style={{ textAlign: "left" }}> {customer?.use?.name}</td>
                </tr>

                <tr>
                  <td>Size</td>
                  <td style={{ textAlign: "left" }}>
                    {parseFloat(customer?.size_in_sqm)
                            .toLocaleString("en-US", {
                              minimumIntegerDigits: 1,
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,})
                            } {customer?.measurement?.name}(s)</td>
                </tr>

                {!(customer?.type == 3) && (
                <tr>
                  <td>Terms of Grant:</td>
                  <td style={{ textAlign: "left" }}>Ninety-Nine(99) Years</td>
                </tr>
                )}
                {!(customer?.type == 3) && (
                <tr>
                  <td>Rent Revision Period</td>
                  <td style={{ textAlign: "left" }}>Every 5 Years</td>
                </tr>
                )}
               
              </tbody>
            </table> */}
           
            {/* Table */}
            <table className={classes["content-table"]}>
              <thead className={classes.thead1}>
                <h3> FEES</h3>
                <tr className={classes.theadTh}>
                  <th>Payment Items(s)</th>
                  <th style={{ textAlign: "right" }}>Amount</th>
                  {showRebate && <th style={{ textAlign: "right" }}>{assessmentLetter?.rebate_value}% Rebate (₦)</th>}
                  {showRebate && <th style={{ textAlign: "right" }}>Total (₦)</th>}
                </tr>
              </thead>
              <tbody>
              {paymentbreak?.map((item, index) => {
                  const totalAmount = Number(item.amount) - Number(item.rebate_amount);

                  return (
                    <tr key={index}>
                      <td>{item.name || item.description}</td>
                      <td style={{ textAlign: "right" }}>
                        {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(Number(item.amount) || 0)}
                      </td>

                      {showRebate && (
                        <td style={{ textAlign: "right" }}>
                          {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(Number(item.rebate_amount) || 0)}
                        </td>
                      )}

                      {showRebate && (
                        <td style={{ textAlign: "right" }}>
                          {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(totalAmount || 0)}
                        </td>
                      )}
                    </tr>
                  );
                })}
                {/* Display total amount after the last item */}
                {paymentbreak?.length > 0 && (
                  <tr>
                    <th>Total</th>
                    <th style={{ textAlign: "right" }}>
                      {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
                        paymentbreak?.reduce((sum, item) => sum + Number(item.amount), 0)
                      )}
                    </th>

                    {showRebate && (
                      <th style={{ textAlign: "right" }}>
                        {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
                          assessmentLetter?.specification?.reduce((sum, item) => sum + Number(item.rebate_amount), 0)
                        )}
                      </th>
                    )}

                    {showRebate && (
                      <th style={{ textAlign: "right" }}>
                        {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
                          assessmentLetter?.specification?.reduce((sum, item) => sum + (Number(item.amount) - Number(item.rebate_amount)), 0)
                        )}
                      </th>
                    )}
                  </tr>
                )}
              </tbody>

            </table>
          </section>

          {/* Details Section with Numbers */}
          <section className={classes.details}>
            <h3>OTHER SPECIAL CONDITIONS</h3>

            <ol style={{ textAlign: "justify", fontSize: "14px", paddingLeft: "15px" }}>
              <li style={{ paddingLeft: "10px" }}>
                You are requested to pay the sum of{" "}
                {/* <strong>
                  {showRebate
                    ? `${totalInWordsRe}`
                    : `${totalInWords}`
                  }
                  {" "}
                  (
                  {new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN"
                  }).format(showRebate ? totalAfterRebate : totalAmount)}
                  )
                </strong> being the total sum payable on the {sentenceOffer2[customer?.type] || ""} as evidence of acceptance of this offer.  */}
                The said amount is expected to be paid using the Payment Code stated above in this 
                document via any of the following payment channels: 
                <br /> 
                a.) Ogun State Government Approved Banks(s) via
                eCashier, Remita, PayDirect Platfrom. <br />
                b.) Online via pay.ogunstate.gov.ng.
                <br />
                c.) POS
                <br />
                <br />{" "}
              </li>
              {customer?.type == 2 && (
              <li style={{ paddingLeft: "10px" }}>
              The allocation is also subject to other implied and express conditions to be stated on the 
              Certificate of Occupancy (that will be issued in evidence of this grant) and the Land Use 
              Act CAP L5 LFN 2004.
                <br /> <br />{" "}
              </li>
              )}
              {customer?.type == 3 && (
                <div>
                  <li style={{ paddingLeft: "10px" }}>
                  Kindly notify the Bureau of your full payment of consent fee for further processing of your title document.
                    <br /> <br />{" "}
                  </li>
                  <li style={{ paddingLeft: "10px" }}>
                  Your prompt payment of all fee/charges into the coffer of Ogun State Government will hasten 
                  further processing of your application for Governor's Consent to Deed of Assignment.
                    <br /> 
                  </li>
                </div>
              )}
              {/* {assessmentLetter?.type == 4 && (
              <li style={{ paddingLeft: "10px" }}>
                You are expected to commence the development of the parcel of the land within <b>six (6) months </b>
                from the date of this letter failing upon which the allocation is subject to revocation without notice.
                <br /> <br />{" "}
              </li>
              )} */}
              {customer?.type == 4 && (
              <li style={{ paddingLeft: "10px" }}>
                The Provisional offer is also subject to other implied and express conditions
                to be stated on the Certificate of Occupancy (that will be issued in evidence of this grant)
                and the Land Use Act No 6 of 1978.
                <br /> <br />{" "}
              </li>
              )}
              {!(customer?.type == 3) && (
                <div>
                  <li style={{ paddingLeft: "10px" }}>
                  That you (applicant) should notify the Bureau upon full payments of your land charges 
                  for further processing of your title documents within the possible time frame. {" "}
                    <br /> <br />{" "}
                  </li>
                  <li style={{ paddingLeft: "10px" }}>
                  Please note that any payment after the deadline given, you are expected to get in 
                  touch with the Bureau, to issue a letter of renewal of offer before any further payment. 
                  <br /> 
                  <br />{" "}
                  </li>
                  <li style={{ paddingLeft: "10px" }}>
                  You are also expected to please forward the following documents to this office 
                  soonest to facilitate issuance of your Certificate of Occupancy after payment of the 
                  requisite fees:
                  <br />
                  <ol type="i" style={{ textAlign: "justify", fontSize: "14px", paddingLeft: "15px" }}>
                    <li style={{ paddingLeft: "10px" }}>Photocopy of all receipts issued for fees demanded above.</li>
                    <li style={{ paddingLeft: "10px" }}>You are to obtain and submit duly completed application form for State Land.</li>
                    <li style={{ paddingLeft: "10px" }}>Photocopy of Current Tax Clearance of two directors.</li>
                    <li style={{ paddingLeft: "10px" }}>Photocopy of Ogun State Development Levy receipts for the last four years for two directors.</li>
                    <li style={{ paddingLeft: "10px" }}>Photocopy of means of identification for two (2) directors of the company.</li>
                    <li style={{ paddingLeft: "10px" }}>Four (4) passport photographs for two (2) directors on white background.</li>
                    <li style={{ paddingLeft: "10px" }}>Board resolution in respect of the subject transaction.</li>
                    <li style={{ paddingLeft: "10px" }}>Photocopy of Memorandum and Articles of Association.</li>
                    <li style={{ paddingLeft: "10px" }}>Photocopy of Certificate of Incorporation.</li>
                  </ol>
                  </li>
                </div>
              )}
              <br />
              {!(customer?.type == 4 || customer?.type == 3) && (
              <li style={{ paddingLeft: "10px" }}>
                Please note that you will be responsible for the payment of compnesation for crops enumeration and any other 
                unexhausted improvements on the land if any. <br />
                <br />
              </li>
              )}
              {!(customer?.type == 3) && (
              <li style={{ paddingLeft: "10px" }}>
              If the terms and conditions stated above are acceptable to you, please forward a letter of 
              acceptance with evidence of payment receipts/tellers to this office on or before the next 
              (60) days of your receiving this letter, failing which the offer would be deemed to have 
              been rejected or lapsed. <br />
              <br />
              </li>
              )}
              <li style={{ paddingLeft: "10px" }}>
              Many thanks
              <br />
              </li>
            </ol>
            <br />
            <br />
            {customer?.type == 2 && (
            <h1 className={classes["document-title"]}>
            <span className={classes.titleText}>
              _____________________ <br />
              Okulalu A. A.
              {/* <span className={classes.lenght}>ANIVS, RSV</span> */}
            </span>
            <br /> Director, Land Management
            <br /> For: Special Adviser/Director General (Lands)
          </h1>              
            )}
            {customer?.type == 1 && (
            <h1 className={classes["document-title"]}>
            <span className={classes.titleText}>
              _____________________ <br />
              Shobukonla O. M.
              {/* <span className={classes.lenght}>ANIVS, RSV</span> */}
            </span>
            <br /> Director, Land Ratification
            <br /> For: Special Adviser/Director General (Lands)
          </h1>              
            )}
          </section>
        </div>
      </div>
      {/* Modal for Rebate Input */}
      {/* <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Rebate Percentage</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleRebateSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Rebate (%)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="100"
                value={rebateValue}
                onChange={(e) => setRebateValue(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              Apply Rebate
            </Button>
          </Modal.Footer>
        </Form>
      </Modal> */}
    </div>
  );
};

export default PrintGeneratedAssessmentLetter;
