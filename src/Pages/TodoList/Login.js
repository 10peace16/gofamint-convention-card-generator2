import React, { useRef, useState, useEffect } from 'react';
import axios  from "axios";
import { Row, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import classes from "../Another Chapter/chapterOne.module.css";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 
  const inputFile = useRef(null);
  const [isSelected, setIsSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const uploadFile = () => {
    inputFile.current.click();
  }


    const handleChange = (e) => {
    const file = e.target.files[0];
    if (file){
    setIsSelected(file);
  }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here

    setLoading(true);
    setError(null);

    const payload = {
      firstName,
      lastName,
      email,
      password
    };

    try {
        // Simulate an API call
        const { data } = await axios.post("/api/register", payload);
        setSuccess(true);
         Swal.fire({
        icon: 'success',
        title: 'Success',
        text: "User created successfully ✅",
        });
    } catch (err) {
        setError("Invalid credentials");
    } finally {
        setLoading(false);
    }
   
    };
    const resetForm = () => {
    setPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setIsSelected(null);
  }

    // useEffect(() => {}, [success, error]);

   useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(null);
        resetForm();
      }, 3000);
    } 
   }, [success, error]);



  return (
    <div>
      <h2>Register</h2>
      <Row>
        <Form onSubmit={handleSubmit} style={{margin: "5px", width: "40%"}}>
            <Form.Group  as={Row} className="mb-3">
                <Form.Label column sm="2">FirstName</Form.Label>
                <Col sm="10">
                    <Form.Control 
                    type="text"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)} placeholder="Firstname"
                    />
                </Col>
            </Form.Group>
            
        <Form.Group  as={Row} className="mb-3">
            <Form.Label column sm="2">LastName</Form.Label>
            <Col sm="10">
                <Form.Control 
                type="text"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)} placeholder="Lastname"
                />
            </Col>
        </Form.Group>
    
        <Form.Group  as={Row} className="mb-3">
            <Form.Label column sm="2">Email</Form.Label>
            <Col sm="10">
                <Form.Control 
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} placeholder="Email"
                />
            </Col>
        </Form.Group>
    
        <Form.Group  as={Row} className="mb-3">
            <Form.Label column sm="2">Password</Form.Label>
            <Col sm="10">
                <Form.Control 
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} placeholder="Password"
                />
            </Col>
        </Form.Group>
    
        <Form.Group  as={Row} className="mb-3">
            {/* <Form.Label column sm="2">File</Form.Label> */}
            <Col sm="10">
            <Form.Control 
            type="file"
            style={{display: "none"}}
            ref={inputFile}
            // value={password}
            onChange={handleChange} placeholder="Password"
        />
        <div>
            <button type="button" onClick={uploadFile} className={classes.buttonTrigger}>Upload File</button>
            {isSelected ? (
            <div>
                <p>File selected: {isSelected.name}</p>
            </div>
            ) : null}
        </div>
        </Col>
        </Form.Group>
    
        <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
        </button>
    
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
        </Form>
        </Row>
    </div>
  );
};

export default Register;