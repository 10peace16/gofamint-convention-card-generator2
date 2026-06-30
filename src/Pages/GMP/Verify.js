import React, { useState } from "react";
import classes from "./Verify.module.css";
import { Col, Row, Button } from "react-bootstrap";
import { Form, FormGroup } from "react-bootstrap";
import verifyImage from "../../Assets/GMP/verifyImage.svg";

function Verify() {
  const [otp, setotp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("OTP:", otp);
  };


  return (
    <div className={classes.body}>
        <Row className={classes.mainBox}>
            <Col xs={12} md={6} style={{display: "flex"}}>
                <div className={classes.subMainBox}>
                    <div className={classes.formBox}>
                        <div className={classes.subFormBox}>
                            <div className={classes.text}>
                                <h4>Let's verify it's you</h4>
                                <p>Enter the 6-digit code we sent to your email to continue.</p>
                            </div>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group style={{marginBottom: "15px"}}>
                                        <Form.Label className={classes.label}>Enter OTP</Form.Label>
                                            <Form.Control 
                                            type="text"
                                            placeholder="Enter code"
                                            className={classes.input}
                                            value={otp}
                                            onChange={(e) => setotp(e.target.value)}
                                            required />
                                    </Form.Group>
                                   
                                    <div className={classes.resendCode}>
                                        <p>Resend code in <span>00:32</span></p>
                                    </div>
                                    <Button type="submit" className={classes.continueBtn}>Continue</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className={classes.imageBox}>
                        <img src={verifyImage} alt="keyboard" className={classes.imageMic}/>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default Verify;
