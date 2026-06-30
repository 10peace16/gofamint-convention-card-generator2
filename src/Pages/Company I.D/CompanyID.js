import React from "react";
import classes from "./CompanyID.module.css";
import myidlogo from "../../Assets/logo.svg";
import barcode from "../../Assets/barcode.svg";
import telicon from "../../Assets/Telicon.svg";
import email from "../../Assets/emailicon.svg";
import {useState} from "react";
import { Button } from "react-bootstrap";
function CompanyID() {

  const[count, setCount] = useState(0);
  const[liked, setLiked] = useState(false);
  
  const handleLike = () => {
    if (liked => !liked){
      setCount(count + 1);
      setLiked(true);
      console.log(count + 1);
    }
  }
  
  const handleDislike = () => {
    if (liked => !liked){
      if(count > 0){
        setCount(count - 1);
        setLiked(true);
        console.log(count - 1);
      }
    }
  }

  return (
    <div>
      <div className={classes.MainContainer}>
        <div className={classes.FirstSubContainer}>
            <div className={classes.CompanyName}>
              <img src={myidlogo} className={classes.myidlogo}/>
             <h2>COMPANY NAME</h2>
             <h5 className={classes.idcard}>I.D CARD</h5>
            </div>
        </div>
        <div className={classes.SecondSubContainer}>
          <div className={classes.Container1}>
              <div className={classes.ContainerCompanyName1}>
                <h3>COMPANY NAME</h3>
                <h5>OPNT DERT</h5>
              </div>
              <div className={classes.ContainerInfo}>
                <div className={classes.ContainerIcon}>
                  <div className={classes.ContainerIconText}>
                    <img src={telicon} className={classes.Icon}/>
                    <div className={classes.Text1}>
                      <p>+342556 6353 &</p>
                      <p>emergency.com</p>
                    </div>
                  </div>
                  
                  <div className={classes.ContainerIconText}>
                   <img src={telicon}  className={classes.Icon}/>
                    <div className={classes.Text1}>
                      <p>+342556 6353 &</p>
                      <p>A T5811E KAI</p>
                    </div>
                  </div>

                  <div className={classes.ContainerIconText}>
                    <img src={email}  className={classes.Icon}/>
                     <div className={classes.Text1}>
                      <div className={classes.Text1}>
                      <p>+342556 6353 &</p>
                      <p>emergency.com</p>
                    </div>
                    </div>
                  </div>
                </div>

                {/* <div className={classes.ContainerContent}>
                  <div className={classes.Text1}>
                    <p>+342556 6353 &</p>
                    <p>emergency.com</p>
                  </div>

                  <div className={classes.Text2}>
                    <p>+342556 6353 &</p>
                    <p>A T5811E KAI</p>
                  </div>

                  <div className={classes.Text3}>
                    <p>company@gmail.com</p>
                    <p>www.brookes.org</p>
                  </div>
                </div> */}
              </div>
          </div>
          <div className={classes.Container2}>
            <div className={classes.CompanyName2}>
              <img src={myidlogo} className={classes.myidlogo2}/>
             <h2>COMPANY NAME</h2>
             <h5 className={classes.idcard2}>I.D CARD</h5>
             <img src={barcode} className={classes.barcode}/>
            </div>
          </div>
        </div>
        
        <div style={{display: "flex", alignItems: "center", marginLeft: "200px", marginTop: "40px"}}>
          <div className={classes.mainButton}>
            <Button onClick={handleLike} className={classes.button}> 
                👍 
            </Button>
            <p>{count}</p>
          </div>
          <div className={classes.mainButton}>
            <Button onClick={handleDislike} className={classes.button}> 
                👎
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CompanyID;
