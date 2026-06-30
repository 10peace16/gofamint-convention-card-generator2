import React from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import classes from "./SearchBar.module.css";
import searchIcon from "../../Assets/GMP/searchIcon.svg";
import bellIcon from "../../Assets/GMP/bellIcon.svg";
import imageIcon from "../../Assets/GMP/imageIcon.svg";

function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const search = (e) => {
        setSearchTerm(e.target.value);
        // Implement search logic here
    };
  return (
    <div>
        <Row>
                  <Col xs={12} >
                    <div className={classes.topHeader}>
                        <div>
                            <InputGroup style={{width: "400px",  borderRadius: "12px"}}>
                                <InputGroup.Text style={{ border: "none", position: "absolute", zIndex: "10", left: "5px", background: "transparent", top: "3px", borderRadius: "12px"}}>
                                        <img src={searchIcon} style={{width: "24px", height: "24px"}}/>
                                </InputGroup.Text>
                                    <Form.Control type="text" placeholder = "Search anything" value={searchTerm} onChange={search} className={classes.formControl}/>
                            </InputGroup>
                        </div>
                        <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
                          <img src={bellIcon} style={{width: "24px", height: "25px"}}/>
                          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                            <div className={classes.textBox}>
                              <p>Hi ✋</p>
                              <p>John Doe</p>
                            </div>
                            <img src={imageIcon} style={{width: "40px", height: "40px"}}/>
                          </div>
                        </div>
                    </div>
                  </Col>      
        </Row>
    </div>
  );
}

export default SearchBar;
