import React, { useState } from "react";
import classes from "./ForgotPassword.module.css";
import { Col, Row, Button } from "react-bootstrap";
import { Form, FormGroup } from "react-bootstrap";
import forgotImage from "../../Assets/GMP/forgotImage.svg";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
  };


  return (
    <div className={classes.body}>
        <Row className={classes.mainBox}>
            <Col xs={12} md={6} style={{display: "flex"}}>
                <div className={classes.subMainBox}>
                    <div className={classes.formBox}>
                        <div className={classes.subFormBox}>
                            <div className={classes.text}>
                                <h4>Forgot password?</h4>
                                <p>Enter your email address and we'll send you a link to reset your password.</p>
                            </div>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group style={{marginBottom: "15px"}}>
                                        <Form.Label className={classes.label}>Email address</Form.Label>
                                            <Form.Control 
                                            type="email"
                                            placeholder="Email address"
                                            className={classes.input}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </Form.Group>
                                   
                                    <div className={classes.resendCode}>
                                        <p>Resend code in <span>00:32</span></p>
                                    </div>
                                    <Button type="submit" className={classes.loginBtn}>Continue</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className={classes.imageBox}>
                        <img src={forgotImage} alt="Mic" className={classes.imageMic}/>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default ForgotPassword;
