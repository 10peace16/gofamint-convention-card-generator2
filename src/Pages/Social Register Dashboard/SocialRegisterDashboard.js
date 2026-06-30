import React, { useState } from "react";
import classes from "./SocialRegisterDashboard.module.css"; 
import {Row, Col, Button} from "react-bootstrap";
import { InputGroup, Form, } from "react-bootstrap";
import searchIcon from "../../Assets/Social Register Dashboard/searchIcon.svg";
import bell from "../../Assets/Social Register Dashboard/bell.svg";
import userBotton from "../../Assets/Social Register Dashboard/userBotton.svg";
import calendar from "../../Assets/Social Register Dashboard/calendar.svg";
import registerIcon from "../../Assets/Social Register Dashboard/registerIcon.svg";
import user from "../../Assets/Social Register Dashboard/beneficiary.svg";
import verify from "../../Assets/Social Register Dashboard/verify.svg";
import hourGlass from "../../Assets/Social Register Dashboard/hourGlass.svg";
import markerPin from "../../Assets/Social Register Dashboard/markerPin.svg";
import arrowUp from "../../Assets/Social Register Dashboard/arrowUp.svg";
import pencilIcon from "../../Assets/Social Register Dashboard/pencilIcon.svg";
import householdRound from "../../Assets/Social Register Dashboard/householdRound.svg";
import verifyIconRound from "../../Assets/Social Register Dashboard/verifyIconRound.svg";
import Sidebar from "../../Components/Sidebar/Sidebar";


import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);



function SocialRegisterDashboard() {
    const[searchTerm, setSearchTerm] = useState("");
    const search = (e) => {
        setSearchTerm(e.target.value);
    }

    const items = [
        {id: 1, img: registerIcon, number: "12,640", text: "Registered Households", subItem : {icon: arrowUp, subText: "3.4% this month"}},  
        {id: 2, img: user, number: "54,312", text: "Total Beneficiaries", subItem : {icon: arrowUp, subText: "2.1% this month"}},
        {id: 3, img: verify, number: "10,904", text: "Verified & Active", subItem : {icon: arrowUp, subText:"1.8% this week"}}, 
        {id: 4, img: hourGlass, number: "1,248", text: "Pending Verification", subItem : {subText: "36 new today"}},
        {id: 5, img: markerPin, number: "8 / 8", text: "Districts Covered", subItem : {subText: "Full Coverage"}}
    ]

      // 🟢 BAR CHART
  const barData = {
    labels: ["Month 1", "Month 2", "Month 3", "Month 4"],
    datasets: [
      {
        data: [380, 360, 430, 240],
        backgroundColor: "#15803D",
        borderRadius: 8,
        // barThickness: 30

      },
      {
        data: [280, 320, 210, 150],
        backgroundColor: "#DCFCE7",
        borderRadius: 8,
        // barThickness: 30

      }
    ]
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    // scales: {
    //   x: {
    //     // display: false,
    //     grid: { display: false },
    //     ticks: { color: "#14532D" },
        
        
    //   },
    //   y: {
    //     display: false,
    //     grid: { display: false }
    //   }
    // }
     scales: {
    x: {
        stacked: false,
        categoryPercentage: 2.0, // 👈 push groups together (IMPORTANT)
        barPercentage: 0.5,     
      grid: {
        display: false,
        
      },
      border: {display: false},
      ticks: { color: "#14532D" }
    },
    y: {
      display: false,
      grid: { display: false }
    }
  }
  };

  // 🟡 DOUGHNUT
  const doughnutData = {
    datasets: [
      {
        data: [87, 8, 7],
        backgroundColor: ["#047857", "#D97706", "#DC2626"],
        borderWidth: 0
      }
    ]
  };

  const doughnutOptions = {
    cutout: "60%",
    plugins: {
      legend: { display: false }
    }
  };

  // 🔵 PROGRESS BAR COMPONENT
  const Progress = ({ label, value, color }) => (
    <div className={classes.progressItem}>
      <div className={classes.progressHeader}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className={classes.progressTrack}>
        <div
          className={classes.progressFill}
          style={{ width: `${value}%`, background: color }}
        ></div>
      </div>
    </div>
  );

  const districts = [
  { name: "District A", households: 2410, rate: 94, status: "Active" },
  { name: "District B", households: 1830, rate: 88, status: "Active" },
  { name: "District C", households: 1540, rate: 75, status: "In Progress" },
  { name: "District D", households: 980, rate: 61, status: "In Progress" },
  { name: "District E", households: 1200, rate: 43, status: "Low Coverage" },
];

const activities = [
  {
    icon: householdRound, text: "12 households submitted in District C by field agent",
    time: "8 minutes ago",
  },
  {
    icon: verifyIconRound, text: "Application #HH-00482 approved - District A",
    time: "34 minutes ago",
  },
  {
    icon: pencilIcon, text: "Household #HH-00441 updated - contact details changed",
    time: "2 hours ago",
  },
];

const getStatusClass = (status) => {
  if (status === "Active") return classes.active;
  if (status === "In Progress") return classes.progress;
  return classes.low;
};
  return (
    <div>
        <Row className={classes.topHeader}>
            <Col xs={4} className={classes.dashboardCol}>
              <div>
                <p className = {classes.dashboardText}>Dashboard</p>
              </div>
            </Col>
            
            <Col xs={{span: 5, offset: 2}} className={classes.searchTag}>
            <div style={{display: "flex",  alignItems: "center", gap: "20px"}}>
                <div>
                    <InputGroup style={{width: "400px",  borderRadius: "12px"}}>
                        <InputGroup.Text style={{ border: "none", position: "absolute", zIndex: "10", left: "5px", background: "transparent", top: "3px", borderRadius: "12px"}}>
                                <img src={searchIcon} style={{width: "24px", height: "24px"}}/>
                        </InputGroup.Text>
                            <Form.Control type="text" placeholder = "Search beneficiaries or household" value={searchTerm} onChange={search} className={classes.formControl}/>
                    </InputGroup>
                </div>
                <div style={{display: "flex", gap: "10px"}}>
                  <img src={bell} style={{width: "40px", height: "40px"}}/>
                  <img src={userBotton} style={{width: "40px", height: "40px"}}/>
            </div>
            </div>
            </Col>    
                
                {/* <Col xs={1} style={{display: "flex", gap: "8px", marginRight: "14px"}}>
                    <img src={bell} style={{width: "48px", height: "48px"}}/>
                    <img src={userBotton} style={{width: "48px", height: "48px"}}/>   
                </Col> */}
        </Row>
        
        <div style={{paddingRight: "10px"}}>

          <Row style={{justifyContent: "space-between"}}>
              <Col xs={4} md={4} style={{marginTop: "20px"}}>
              <div>
                  <h6 style={{color: "#14532D", fontFamily: "Manrope", textAlign: "left",  fontWeight: "600", fontSize: "20px"}}>Overview</h6><p style={{color: "#64748B", fontFamily: "Manrope", textAlign: "left", fontWeight: "500", fontSize: "12px", lineHeight: "1.5px"}}>Summary  of register data across all districts and zones</p>
              </div>
              </Col>
              <Col xs={4} md={4} style={{marginTop: "20px", display: "flex", justifyContent: "flex-end"}}>
                <div style={{border: "0.8px solid #15803D", borderRadius: "12px", background: "white", width: "224px", height: "40px", display: "flex", gap: "6px", alignItems: "center", padding: "0px 15px"}}>
                  <div>
                    <img src={calendar} style={{width: "24px", height: "24px"}}/>
                  </div>
                  <div>
                    <p style={{color: "#15803D", fontFamily: "Manrope", fontSize: "13px", fontWeight: "400", margin: "0"}}>Monday, 16th March, 2026</p>
                  </div>
                </div>
              </Col>
          </Row>

        </div>
        <div className={classes.mainBox}>
            {items.map(item =>(
                    <div className = {`${classes.box} ${item.text === "Registered Households"? classes.registeredHouseholds : item.text === "Total Beneficiaries"? classes.totalBeneficiaries : item.text === "Verified & Active"? classes.verifiedActive : item.text === "Pending Verification"? classes.pendingVerification : item.text === "Districts Covered"? classes.districtsCovered : "" }`} key={item.id}>
                        <img src={item.img}/>
                        <div className={classes.boxNumber}>
                            <h1 className={classes.number}>
                                {item.number}
                            </h1>
                            <p className={classes.title}>
                                {item.text}
                            </p>
                        </div>
                        <div className={classes.arrowText}>
                            <img src={item.subItem.icon} className={classes.arrowIcon}/><p className={["3.4% this month" , "2.1% this month", "1.8% this week"].includes(item.subItem.subText)? classes.subText : item.subItem.subText === "36 new today"? classes.pending : item.subItem.subText === "Full Coverage"?classes.subText2 : ""}>{item.subItem.subText}</p>
                        </div>
                    </div>
            ))}
        </div>

    <Row className={classes.container}>

      {/* 🟢 REGISTRATION TREND */}
      <Col xs={4}>
          <div className={classes.card}>
            <div className={classes.header}>
                <div>
                    <h4>Registration Trend</h4>
                    <p>Monthly registrations vs verifications</p>
                </div>
                <Button className={classes.link}>Full Report<img src={arrowUp} className={classes.arrowLink}/></Button>
            </div>
            <div className={classes.chartBox}>
              <Bar data={barData} options={barOptions} />
            </div>  
          </div>
      </Col>

      {/* 🟡 VERIFICATION STATUS */}
      <Col xs={3}>
          <div className={classes.cardMiddle}>
            <div className={classes.header}>
            <div>
                <h4>Verification Status</h4>
                <p>All households</p>
            </div>
            </div>

            <div className={classes.doughnutWrapper}>
                <Doughnut data={doughnutData} options={doughnutOptions} />
                <div className={classes.centerText}>
                    <h2>87%</h2>
                    <span>verified</span>
                </div>
            </div>
            <div className={classes.legend}>
                <div className={classes.greenDot}>
                    <h6>Verified</h6>  
                    <p>10,904</p>
                    </div>
                <div className={classes.orangeDot}> 
                    <h6>Pending</h6> 
                    <p>1,248</p>
                </div>
                <div className={classes.redDot}>
                    <h6>Rejected</h6>
                    <p>388</p>
                </div>
            </div>
          </div>

      </Col>

      {/* 🔵 DEMOGRAPHICS */}
      <Col xs={4} className={classes.card}>
            <div className={classes.header}>
                <div>
                    <h4>Demographics</h4>
                    <p>54312 beneficiaries</p>
                </div>
            </div>

            <h5 className={classes.sectionTitle}>GENDER</h5>
            <Progress label={<span className={classes.labelDemo}>Female</span>} value={72} color="#15803D"  />
            <Progress label={<span className={classes.labelDemo}>Male</span>} value={44} color="#1D4ED8" />
            <Progress label={<span className={classes.labelDemo}>Unspecified</span>} value={2} color="#047857" />

            <h5 className={classes.sectionTitle}>POVERTY TIER</h5>
            <Progress label={<span className={classes.labelDemo}>Extremely Poor</span>} value={30} color="#DC2626" />
            <Progress label={<span className={classes.labelDemo}>Very Poor</span>}value={45} color="#D97706"/>
            <Progress label={<span className={classes.labelDemo}>Moderately Poor</span>} value= {39} color="#10B981" />
      </Col>

    </Row>


    <div className={classes.container}>
      
      {/* LEFT CARD */}
      <div className={classes.cardTable}>
            <div className={classes.cardTableHeader}>
            <div>
                <h3>District / Zone Coverage</h3>
                <p>Registration and Verification Progress by area</p>
            </div>
            <Button className={classes.linkViewAll}>View all<img src={arrowUp} className={classes.arrowLink}/></Button>
            </div>

            <table className={classes.table}>
          <thead>
            <tr>
              <th>DISTRICT / ZONE</th>
              <th>HOUSEHOLDS</th>
              <th>VERIF. RATE</th>
              <th>PROGRESS</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {districts.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.households.toLocaleString()}</td>
                <td>{data.rate}%</td>
                <td>
                  <div className={classes.progressBar}>
                    <div
                      className={classes.progressFill}
                      style={{ width: `${data.rate}%` }}
                    />
                  </div>
                </td>
                <td className={getStatusClass(data.status)}>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT CARD */}
      <div className={classes.cardTable}>
        <div className={classes.cardTableHeader}>
          <div>
            <h3>Recent Activity</h3>
            <p>Latest System Events</p>
          </div>
         <Button className={classes.linkViewAll}>See all<img src={arrowUp} className={classes.arrowLink}/></Button>
        </div>

        <div className={classes.activityList}>
          {activities.map((item, i) => (
            <div key={i} className={classes.activityItem}>
              <div className={classes.icon}>
                <img src={item.icon}/>
              </div>
              <div>
                <p>{item.text}</p>
                <p className={classes.timeActivity}>{item.time}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
  );
}

export default SocialRegisterDashboard;