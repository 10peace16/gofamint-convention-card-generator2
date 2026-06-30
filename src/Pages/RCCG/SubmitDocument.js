import React from "react";
import classes from "./SubmitDocument.module.css";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import upload from "../../Assets/Submit DocumentRCCG/upload.svg";


function SubmitDocument() {
    
  return (
    <div style={{padding: "30px"}}>
        <div className={classes.header}>
          <h6>Submit Document</h6>
          <p>Fill in the required details and upload your document for review</p>
        </div>
        <Row>
            <Col xs={12} md={12}>
                <div style={{padding: "30px" , background: "#FFFFFF", borderRadius: "24px"}}>
                    <div className={classes.header2}>
                        <h6>Submit Document</h6>
                        <p>Fill in the details about the document you are submitting for review</p>
                    </div>
                    
                        <Form>
                            <Row className="mb-3"> 
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label className={classes.label}>Document Title</Form.Label>
                                        <Form.Control type="text" placeholder="e.g: Budget Proposal — Q2 2026" className={classes.input}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label className={classes.label}>Document Type</Form.Label>
                                        <Form.Select className={classes.input}>
                                            <option>select type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label className={classes.label}>Description (optional)</Form.Label>
                                        <Form.Control type="text" placeholder="Briefly describe what this document is about" className={classes.description}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                </div>

                <div style={{padding: "30px" , background: "#FFFFFF", borderRadius: "24px", marginTop: "25px"}}>
                        <Form>
                            <Row>
                                <Col xs={12} md={12} style={{position: "relative"}}>
                                    <Form.Group controlId="formFile" className="mb-3" >
                                        <Form.Label className={classes.label}>Upload File
                                        <p>Attach the document file. PDF or Word format, max 10MB.</p>
                                        </Form.Label>
                                        
                                        <Form.Control type="none"  className={classes.upload}/>
                                    </Form.Group>
                                    <div style={{display: "flex", flexDirection: "column", position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)", alignItems: "center", gap: "15px"}}>
                                        <Button className={classes.uploadIcon}>
                                            <img src={upload} />
                                        </Button>
                                        <div className={classes.uploadText}>
                                            <h6><a href="#">Click to browse or drag and drop</a></h6>
                                            <p>PDF, DOCX — max 10MB</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                </div>
                        <div style={{display: "flex", gap: "15px", }}>
                            <Button  className={classes.submitButton} type="submit">
                                Submit Document
                            </Button>
                            <Button  className={classes.cancelButton} type="submit">
                                Cancel
                            </Button>
                        </div>
            </Col>
        </Row>
    </div>
  );
}

export default SubmitDocument;
