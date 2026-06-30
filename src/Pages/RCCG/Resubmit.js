import React from "react";
import classes from "./Resubmit.module.css";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import upload from "../../Assets/Submit DocumentRCCG/upload.svg";
import backArrow from "../../Assets/Submit DocumentRCCG/backArrow.svg";
import returnIcon from "../../Assets/Submit DocumentRCCG/returnIcon.svg";
import doneIcon from "../../Assets/Submit DocumentRCCG/doneIcon.svg";
import { useState } from "react";


function Resubmit() {
    const[modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
  return (
    <div style={{padding: "30px"}}>
        <Button className={classes.backButton} type="submit">
            <img src={backArrow}/><p style={{margin: "0", marginLeft: "10px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#0C06AC"}}>Back</p>
        </Button>
       <Row>
            <Col xs={12} md={12}>
                <div style={{background: "#ECFEFF", borderRadius: "8px", border: "0.5px solid #0E7490", padding: "10px"}}>
                    <div style={{display: "flex", gap: "10px", alignItems: "center" }}>
                        <img src={returnIcon}/>
                        <p style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#0E7490", textAlign: "left", fontSize: "12px", margin: "0"}}>This document was returned for correction<br/>Missing line items on pages 3–4. Please complete all budget rows and resubmit.</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
                <div style={{padding: "30px" , background: "#FFFFFF", borderRadius: "24px", marginTop: "25px"}}>
                    <div className={classes.header2}>
                        <h6>Upload Corrected Document</h6>
                        <p>Upload the corrected version. It will be submitted as a new version for admin review.</p>
                    </div>
                        <Form>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label className={classes.label}>What did you correct?</Form.Label>
                                        <Form.Control type="text" placeholder="Describe the changes you made to address the admin's feedback..." className={classes.description}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={12} style={{position: "relative", marginTop: "20px"}}>
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
                        <div style={{display: "flex", gap: "15px", }}>
                            <Button  className={classes.submitButton} type="submit" onClick={handleModalOpen}>
                                Resubmit Document
                            </Button>
                            <Button  className={classes.cancelButton} type="submit">
                                Cancel
                            </Button>
                        </div>
                    {modalOpen && (
                        <div show={modalOpen} onHide={() => setModalOpen(false)} className={classes.modalOverlay} onClick={ closeModal}>
                            <div className={classes.modalBox} onClick={(e) => e.stopPropagation()}>
                                <div className={classes.modalContent}>
                                    <Button  className={classes.closeButton} onClick= {closeModal}>
                                         ×
                                    </Button>
                                    <div className={classes.modalBody}>
                                        <div className={classes.doneIcon}>
                                            <img src={doneIcon} alt="Done" />
                                        </div>
                                        <div className={classes.headerModal}>
                                            <h5>Document Resubmitted</h5>
                                        </div>
                                        <div className={classes.body}>
                                            <p>Your corrected document has been resubmitted and is now back in the admin's queue for review.</p>
                                        </div>
                                        <div className={classes.footer}>
                                            <Button className={classes.queueButton} onClick={() => setModalOpen(false)}>
                                                Back to Queue
                                            </Button>
                                    </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default Resubmit;
