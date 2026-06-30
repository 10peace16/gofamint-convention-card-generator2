import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown, Stack } from "react-bootstrap";
// import { DropdownButton } from "react-bootstrap";
// import {Container, Row, Col} from "react-bootstrap";
import {Alert, Button, Table} from "react-bootstrap";
import { Form, FloatingLabel} from "react-bootstrap";
import {Row, Col} from 'react-bootstrap';
import { Offcanvas } from "react-bootstrap";
import { data } from "react-router-dom";
import axios from "axios";
import classes from "./chapterOne.module.css";
import Swal from "sweetalert2";
import { InputGroup } from "react-bootstrap";



// const [formData, setFormData] = useState({
//   email: "",
//   password: ""
// });
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Form Submitted:", formData);
// }
// const handleChange = (e) => {
//   const {name, type, checked, value} = e.target;
//   const finalValue = type === "checkbox" ? checked : value;
//   setFormData({
//     ...formData,
//     [name]: finalValue
//   });
// }

function Home() {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm2, setSearchTerm2] = useState("");
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [names, setNames] = useState([]);
  const [info, setInfo] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [loading2, setLoading2] = useState(false);
  const [saved, setSaved] = useState("");
  const [deleteData, setDeleteData] = useState(false);

  const [isSelected, setIsSelected] = useState(null);
  
  const inputFile = useRef(null);

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

    setLoading2(true);
    setError(null);
    setSuccess("");

    try{
      const {data} = await axios.post("https://jsonplaceholder.typicode.com/users", 
        {
          firstName,
          lastName,
          email,
          password
        }
      );
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: "User created successfully ✅",
      });

      console.log(data);

      // clear data
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch(error){
      setError("Something went wrong❌")
    } finally{
      setLoading2(false);
    }


  }

 const [name, setName] = useState("");
//  const [email, setEmail] = useState("");
//  const [loading, setLoading] = useState(false);
//  const [success, setSuccess] = useState("");
//  const [error, setError] = useState(null);

//  const handleSubmit = async (e) => {

//   e.preventDefault();

//   setLoading(true);
//   setError(null);
//   setSuccess("");

//   try{

//     const res = await axios.post(
//       "https://jsonplaceholder.typicode.com/users",
//       {
//         name,
//         email
//       }
//     );

//     setSuccess("User created successfully ✅");

//     console.log(res.data);

//     // clear form
//     setName("");
//     setEmail("");

//   } catch(err){

//     setError("Something went wrong ❌");

//   }

//   setLoading(false);
//  };

// handle save and delete button
const savedData = () => {
  setSaved("Saved");
  console.log(data);
}
// const handledeletedData = () => {
//   const removeData = students.filter(student => 
//     student === ""
//   ) 
//   setDeleteData(true);
// }
  const getNames = async() => {
    try{
      const{data} = await axios.post("https://jsonplaceholder.typicode.com/users", 
        {
          name: "Glory",
          email: "glory@gmail.com",
          phone: "123456677889"  
        }
      );
       setNames((preNames) => [...preNames, data]);
    } catch(error){
      console.log("Error adding user: ", error);
    }
  }
  const getUser2 = async() => {
    try{
      const{data} = await axios.get("https://dummyjson.com/users");
      console.log(data);
      setUsers2(data.users);
    }catch(error){
      setError("Failed to load users");
    }
    finally{
      setLoading(false);
    }
    
  }

  useEffect(()=>{
    getUser2();
  }, []);

  const getUser3 = async() => {
    try{
      const{data} = await axios.get("https://dummyjson.com/products");
      console.table(data.products);
      console.dir(data.products);
      setUsers3(data.products);
    }catch(error){
      setError("Failed to load users");
    }
    finally{
      setLoading(false);
    }
    
  }

  useEffect(()=>{
    getUser3();
  }, []);


    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setUsers(data))
    // }, [])      
    const getUsers = async () => {
      // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      // const response = await fetch("https://jsonplaceholder.typicode.com/users");
      // const data = response.json();
      // setUsers(data);
      // setUsers(response.data);
      try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data);
        setUsers(data); 
      } catch(err){
          setError("Failed to load users");
      }
      setLoading(false);
    };
    useEffect(() =>{
      getUsers();
    },[]);

    if (loading) return <p>...Loading</p>
    if (error) return <p>{error}</p>

  const studentData = [
  {id: 1, matric: 20233220,  name: "John", subject: 'CSC 305', score: 80, save: "Save", delete: "Delete" },
  {id: 2, matric: 20222034, name: "Mary", subject: 'CSC 305', score: 45, save: "Save", delete: "Delete" },
  { id: 3, matric: 20232223, name: "Paul", subject: 'CSC 305', score: 60, save: "Save", delete: "Delete" },
  { id: 4, matric: 20232232,  name: "John", subject: 'CSC 305', score: 80, save: "Save", delete: "Delete" },
  { id: 5, matric: 20232034, name: "Segun", subject: 'CSC 305', score: 50, save: "Save", delete: "Delete" },
  { id: 6, matric: 20232323, name: "Peace", subject: 'CSC 305', score: 60, save: "Save", delete: "Delete" },
  { id: 7, matric: 20232432,  name: "Lekan", subject: 'CSC 305', score: 90, save: "Save", delete: "Delete" },
  { id: 8, matric: 20232534, name: "Mariam", subject: 'CSC 305', score: 58, save: "Save", delete: "Delete" },
  { id: 9, matric: 20232523, name: "Paulina", subject: 'CSC 305', score: 68, save: "Save", delete: "Delete" },
  { id: 10, matric: 20232632,  name: "Johnson", subject: 'CSC 305', score: 70, save: "Save", delete: "Delete"},
  { id: 11, matric: 20232734, name: "Mike", subject: 'CSC 305', score: 75, save: "Save", delete: "Delete" },
  { id: 12, matric: 20232823, name: "Precious", subject: 'CSC 305', score: 60, save: "Save", delete: "Delete"},
  { id: 13, matric: 20232920,  name: "Joshua", subject:'CSC 305', score:80, save: "Save", delete: "Delete" },

  { id: 17, matric: 20233335, name: "Seun", subject: 'CSC 305', score: 50, save: "Save", delete: "Delete" },
  { id: 18, matric: 20233623, name: "Laide", subject: 'CSC 305', score: 60, save: "Save", delete: "Delete" },
  { id: 19, matric: 20233533,  name: "Suraja", subject: 'CSC 305', score: 90, save: "Save", delete: "Delete" },
  { id: 20, matric: 20233825, name: "Bolade", subject:'CSC 305', score: 58, save: "Save", delete: "Delete" },
  ];

  const updateData = () => {
  setStudents(studentData);
  console.log(students);
}
const handledeletedData = (studentId) => {
  const newData = students.filter(student => student.id !== studentId);
  setStudents(newData);
}

const filteredStudents = students.filter(student =>
  student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  student.matric.toString().includes(searchTerm) ||
  student.subject.toLowerCase().includes(searchTerm.toLowerCase()) || student.score.toString().includes(searchTerm)
);




const filterUsers = users.filter(user => user?.name.toLowerCase().includes(searchTerm2.toLowerCase()) ||
user?.email.toLowerCase().includes(searchTerm2.toLowerCase()) || user?.address?.zipcode.toLowerCase().includes(searchTerm2.toLowerCase()) || user?.address?.street.toLowerCase().includes(searchTerm2.toLowerCase()) || user?.address?.geo?.lat.toLowerCase().includes(searchTerm2.toLowerCase()) || user?.address?.geo?.lng.toLowerCase().includes(searchTerm2.toLowerCase())|| user?.company?.name.toLowerCase().includes(searchTerm2.toLowerCase())|| user?.address?.city.toLowerCase().includes(searchTerm2.toLowerCase())
);

// const filterUsers2 = users2.filter(user => user?.name.toLowerCase().includes(searchTerm2.toLowerCase()) ||
// user?.email.toLowerCase().includes(searchTerm2.toLowerCase()) || user?.address?.zipcode.toLowerCase().includes(searchTerm2.toLowerCase()) || user?.address?.street.toLowerCase().includes(searchTerm2.toLowerCase()) || user?.address?.geo?.lat.toLowerCase().includes(searchTerm2.toLowerCase()) || user?.address?.geo?.lng.toLowerCase().includes(searchTerm2.toLowerCase())|| user?.company?.name.toLowerCase().includes(searchTerm2.toLowerCase())|| user?.address?.city.toLowerCase().includes(searchTerm2.toLowerCase())
// );

  return (
    <>
        <div className="bg-success">
          
          {students.length > 0 ? (
            <div>
              <Row>
                <Col style={{background: "black", color: "white", textAlign: "center", padding: "20px", border: "3px solid white", margin: "30px", borderRadius: "10px"}}>
                <h1>FEDERAL UNIVERSITY OF AGRICULTURE, ABEOKUTA</h1>
                <h4>1ST SEMESTER RESULTS</h4>
                <h6>DEPARTMENT OF COMPUTER SCIENCE</h6>
                </Col>
              </Row>
              <Row>
                <Form style={{margin: "5px", width: "40%", marginLeft: "55%"}}>
                  <Form.Control 
                  type="text"
                  placeholder="Search by name, matric or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form>
              </Row>
              <Row style={{marginRight: "auto", marginLeft: "auto", marginBottom: "50px"}}>
                <Col>
                 <Button variant="outline-light" onClick={handleShow}>Other Courses</Button> 
                 </Col>
                 {/* <Col><Alert variant="info"className="d-none d-lg-block">Resize your browser window to show the responsive offcanvas toggle</Alert></Col> */}
              </Row>
            <table style={{margin: "30px", padding: "10px", border: "3px solid black", textAlign: "center", color: "white", backgroundColor: "black", borderRadius: "10px", width: "90%", marginLeft: "auto", marginRight: "auto", fontSize: "18px", fontWeight: "bold"}}>
              {/* <thead>
                <tr style={{backgroundColor: "black"}}>
                    <th style={{rowSpan: "4", textAlign: "center"}}></th>
                </tr>
              </thead> */}
            
              
              <thead>
                <th style={{margin: "30px", padding: "10px"}}>ID</th>
                <th style={{margin: "30px", padding: "10px"}}>MATRIC</th>
                <th style={{margin: "30px", padding: "10px"}}>NAMES</th>
                <th style={{margin: "30px", padding: "10px"}}>SUBJECT</th>
                <th style={{margin: "30px", padding: "10px"}}>SCORE</th>
                <th style={{margin: "30px", padding: "10px"}}>GRADE</th>
                <th style={{margin: "30px", padding: "10px"}}>GPA</th>
                <th style={{margin: "30px", padding: "10px"}}>REMARK</th>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index}>
                    <td style={{margin: "30px", padding: "10px"}}>{index + 1}</td>
                    <td style={{margin: "30px", padding: "10px",}}>{student?.matric}</td>
                    <td style={{margin: "30px", padding: "10px"}}>{student?.name}</td>
                    <td style={{margin: "30px", padding: "10px"}}>{student?.subject}</td>
                    <td style={{margin: "30px", padding: "10px"}}>{student?.score}</td>
                    <td style={{margin: "30px", padding: "10px"}}>{student?.score >= 70 ? "A" : student?.score >= 60 ? "B" : student?.score >= 50 ? "C" : student?.score >= 40 ? "D" : "F"}</td>
                    <td style={{margin: "30px", padding: "10px"}}>{(student?.score * 5)/100}</td>
                    <td style={{margin: "30px", padding: "10px"}}>{student?.score >= 70 ? "Excellent" : student?.score >= 60 ? "Good" : student?.score >= 50 ? "Average" : student?.score >= 40 ? "Poor" : "Fail"}</td>
                    <td ><button className={classes.buttonTrigger} onClick = {savedData}>{student?.save}</button></td>
                    <td><button className={classes.buttonTrigger} onClick = {() => handledeletedData(student.id)}>{student?.delete}</button></td>
                  </tr>
                ))}

              </tbody>
            </table>
               
                <Offcanvas show={show} onHide={handleClose} placement="start" scroll={true} backdrop={true}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Other Courses</Offcanvas.Title>
                  </Offcanvas.Header>
                    <Offcanvas.Body>
                      <p style={{fontSize: "18px", fontWeight: "bold"}}>CSC 101 - Introduction to Computer Science</p>
                      <p style={{fontSize: "18px", fontWeight: "bold"}}>CSC 201 - Data Structures and Algorithms</p>
                      <p style={{fontSize: "18px", fontWeight: "bold"}}>CSC 202 - Computer Organization and Architecture</p>
                      <p style={{fontSize: "18px", fontWeight: "bold"}}>CSC 203 - Introduction to Programming</p>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
          ): (<p className="text-dark bg-warning">No student data available.</p>
            
            )} 

        </div>
        <Button variant="primary" onClick={updateData} className="mx-4">Results Check</Button>


    {/* <Form className="bg-dark mx-5 mt-5" onSubmit = {handleSubmit} > */}

      {/* <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
        <Form.Label className="text-light">Email address</Form.Label>
          <FloatingLabel id="floatemail" label="Enter Email">

          <Form.Control placeholder="Enter email" type="email" className="bg-secondary"/>
          <Form.Text className="text-light">We'll never show your email to anyone</Form.Text>

        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3 mx-5">
        <Form.Label className="text-light">Password</Form.Label>
          <FloatingLabel id="floatemail" label="Password">
        
          <Form.Control type="password" placeholder="Enter your password" className="bg-secondary"/>
        
          </FloatingLabel>

      </Form.Group> */}
      {/* <Row className="mb-3 mx-5">
        <Col>
        <Form.Label className="text-light">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} name="email" className="bg-secondary text-light"/>
        </Col>
        <Col>
        <Form.Label className="text-light">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChange} name="password"    className="bg-secondary text-light"/>
        </Col>
      </Row>
      <Row className="mx-5 mb-3">
        <Col>
            <Form.Label className="text-light">Address</Form.Label>        
            <Form.Control type="address" placeholder="1234 Main St" className="bg-secondary text-light" />
        </Col>
      </Row>
      <Row className="mx-5 mb-3">
        <Col>
            <Form.Label className="text-light">Address2</Form.Label>        
            <Form.Control type="address" placeholder="Apartment, studio, or floor" className="bg-secondary text-light"/>
        </Col>
      </Row>
      <Row className="mx-5 mb-3">
        <Col>
            <Form.Label className="text-light">City</Form.Label>        
            <Form.Control type="city" className="bg-secondary text-light"/>
        </Col>
        <Col>
            <Form.Label className="text-light">State</Form.Label>
            <Form.Select className="bg-secondary text-light">
                <option>Choose...</option>
                <option>Action 2</option>
                <option>Action 3</option>  
            </Form.Select>        
        </Col>
        <Col>
            <Form.Label className="text-light">Zip</Form.Label>        
            <Form.Control type="zip" className="bg-secondary text-light"/>
        </Col>
      </Row>
      <Row className="mx-5 mb-3">
        <Col>
        <Form.Check type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} label="I agree to the terms and conditions" className="text-light"/>
        </Col>
      </Row> 
      <Row className="mx-5">
        <Col>
      <Button variant="primary" type="submit">
        Submit
      </Button> 
      </Col>
      </Row> */}
     
    {/* </Form> */}
        
         
          
          <Row>
                <Form style={{margin: "5px", width: "40%", marginLeft: "55%"}}>
                  <Form.Control 
                  type="text"
                  placeholder="Search by email, name, company name, zipcode, street address, or city..."
                  value={searchTerm2}
                  onChange={(e) => setSearchTerm2(e.target.value)}
                  />
                </Form>
            </Row>

           <table>
            <thead>
              <th>S/N</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>CITY</th>
              <th>COMPANY</th>
              <th>ZIPCODE</th>
              <th>STREET</th>
              <th>GEO LAT</th>
              <th>GEO LNG</th>
              
            </thead>
            {filterUsers.map((user) => (
            <tbody>
              <tr key={user.id}>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>  
                <td>{user?.address?.city}</td>
                <td>{user?.company?.name}</td>
                <td>{user?.address?.zipcode}</td>
                <td>{user?.address?.street}</td>
                <td>{user?.address?.geo?.lat}</td>
                <td>{user?.address?.geo?.lng}</td>
              </tr>
            </tbody>
              ))}
                </table>

                <table style={{marginTop: "60px"}}>
            <thead>
              <th>EMAIL</th>
              <th>BANK CARDNUMBER</th>
              <th>ADDRESS</th>
              <th>POSTCODE</th>
              <th>STATE</th>
              <th>COMPANY NAME</th>
              <th>COMPANY ADDRESS</th>
              <th colSpan={2}>COMPANY COORDINATES(Lat and Lng)</th>
             <th colSpan={2}>HAIR COLOR AND TYPE</th>
             <th>PHONE</th>
              
            </thead>
              <tbody>
            {users2.map((user) => (
              <tr key={user.id}>
                <td>{user?.email}</td>
                <td>{user?.bank?.cardNumber}</td>  
                <td>{user?.address?.address}</td>
                <td>{user?.address?.postalCode}</td>
                <td>{user?.address?.state}</td>
                <td>{user?.company?.name}</td>
                <td>{user?.company?.address?.address}</td>
                <td>{user?.company?.address?.coordinates?.lat}</td>
                <td>{user?.company?.address?.coordinates?.lng}</td>
                <td>{user?.hair?.color}</td>
                <td>{user?.hair?.type}</td>
                <td>{user?.phone}</td>
              </tr>
              ))}
               </tbody>
                </table>
            

                <table style={{marginTop: "60px"}}>
            <thead>
              <th>TITLE</th>
              <th>BRAND</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>RETURN POLICY</th>
              <th>WARRANTY INFORMATION</th>
              <th colSpan={2}>REVIEWERS LIST NAME AND EMAIL</th>
              <th>IMAGES</th>
            </thead>
          <tbody>
            {users3.map((product) => (
              <tr key={product.id} className={product?.category === "groceries"? classes.groceries : product?.category === "beauty"? classes.beauty : product?.category === "fragrances"? classes.fragrances : product?.category === "furniture"? classes.furniture : ""}>
                <td>{product?.title}</td>
                <td>{product?.brand}</td>  
                <td> {product?.category}</td>
                <td>{product?.price}</td>
                <td>{product?.returnPolicy}</td>
                <td>{product?.warrantyInformation}</td>
                <td>{product?.reviews?.[0]?.reviewerName}</td>
                <td>{product?.reviews?.[0]?.reviewerEmail}</td>
                <td>{product?.images[0]}</td>

              </tr>
              
              ))}
               </tbody>
                </table>


                <div>
      <button onClick={getNames} style={{marginTop: "30px"}}>Add Names</button>

      <ul>
        {names.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>


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
        onChange={handleChange}
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

      <Button type="submit" disabled={loading2}>
        {loading2 ? "Submitting..." : "Submit"}
        </Button>

        {success && <p>{success}</p>}
        {error && <p>{error}</p>}
    </Form>
  </Row>
  
 {/* <form onSubmit={handleSubmit}>

    <input
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder="Name"
    />

    <input
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Email"
    />

    <button type="submit" disabled={loading}>
      {loading ? "Submitting..." : "Submit"}
    </button>

    {success && <p>{success}</p>}
    {error && <p>{error}</p>}

  </form> */}

  
    </>
  );
}
  

export default Home;
