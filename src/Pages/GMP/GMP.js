import React, { useState } from "react";
import classes from "./GMP.module.css";
import { Col, Row, Button } from "react-bootstrap";
import { Form, FormGroup } from "react-bootstrap";
import loginImage from "../../Assets/GMP/loginImage.svg";

function GMP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.body}>
        <Row className={classes.mainBox}>
            <Col xs={12} md={6} style={{display: "flex"}}>
                <div className={classes.subMainBox}>
                    <div className={classes.formBox}>
                        <div className={classes.subFormBox}>
                            <div className={classes.text}>
                                <h4>Login your account</h4>
                                <p>Access your dashboard and continue where you left off.</p>
                            </div>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Select className={classes.select}>
                                        <option value="admin">Fan</option>
                                        <option value="user">Artist</option>
                                        <option value="user">Celebrity</option>
                                    </Form.Select>
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
                                    <Form.Group style={{marginBottom: "15px"}}>
                                        <Form.Label className={classes.label}>Password</Form.Label>
                                            <div className={classes.passwordwrapper}>
                                                <Form.Control 
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                className={classes.input}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required />
                                             <span className={classes.eye} onClick={togglePasswordVisibility} style={{cursor: "pointer"}}>{showPassword ? "🙈" : "👁"}</span>
                                            </div>
                                    </Form.Group>
                                    <div className={classes.formActionRow}>
                                        <Form.Group className={classes.rememberRow}>
                                            <label className={`${classes.labelCheck} ${classes.checkboxWrapper}`}>
                                                <input
                                                    type="checkbox"
                                                    className={classes.check}
                                                    checked={rememberMe}
                                                    onChange={(e) => setRememberMe(e.target.checked)}
                                                />
                                                <span>Remember me</span>
                                            </label>
                                        </Form.Group>

                                        <a href="/forgot" className={classes.forgotLink}>Forgot password?</a>
                                    </div>
                                    <Button type="submit" className={classes.loginBtn}>Login</Button>
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

export default GMP;
