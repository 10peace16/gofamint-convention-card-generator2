import React, { useState } from "react";
import classes from "./ResetPassword.module.css";
import { Col, Row, Button } from "react-bootstrap";
import { Form, FormGroup } from "react-bootstrap";
import loginImage from "../../Assets/GMP/loginImage.svg";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isMatch =  confirmPassword && password === confirmPassword;

  return (
    <div className={classes.body}>
        <Row className={classes.mainBox}>
            <Col xs={12} md={6} style={{display: "flex"}}>
                <div className={classes.subMainBox}>
                    <div className={classes.formBox}>
                        <div className={classes.subFormBox}>
                            <div className={classes.text}>
                                <h4>Set a new password</h4>
                                <p>Create a strong password to secure your account. Make sure it’s something you’ll remember.</p>
                            </div>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group style={{marginBottom: "15px"}}>
                                        <Form.Label className={classes.label}>New password</Form.Label>
                                            <Form.Control 
                                            type="password"
                                            placeholder="New password"
                                            className={classes.input}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                    </Form.Group>
                                    <Form.Group style={{marginBottom: "15px"}}>
                                        <Form.Label className={classes.label}>Confirm password</Form.Label>
                                            <div className={classes.passwordwrapper}>
                                                <Form.Control 
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                className={classes.input}
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                                required />
                                             <span className={classes.eye} onClick={togglePasswordVisibility} style={{cursor: "pointer"}}>{showPassword ? "🙈" : "👁"}</span>
                                             {confirmPassword && password !== confirmPassword && (
                                            <p style={{ color: "red", fontSize: "12px", fontFamily: "Montserrat" }}>Passwords do not match</p>)}
                                            </div>
                                    </Form.Group>
                                    <Button type="submit"  className={classes.continueBtn}>Continue</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className={classes.imageBox}>
                        <img src={loginImage} alt="Mic" className={classes.imageMic}/>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default ResetPassword;
