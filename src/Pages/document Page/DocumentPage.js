import React from "react";
import classes from "./DocumentPage.module.css";
import imageuse from "../../Assets/logo.svg";

function DocumentPage() {
  return (
    <div className={classes.document}>
      <img src={imageuse} />
      <h1 className={classes.DocumentText}>DOCUMENT PAGE</h1>
      <h3 className={classes.Text}>
        PERCEPTION AND ATITUDES OF HEALTH RECORD OFFICERS TOWARDS INFORMATION
        SECURITY IN ELECTRONIC MEDICAL RECORD SYSTEM A CASE STUDY OF OLABISI
        ONABANJO UNIVERSITY TEACHING HOSPITAL, SAGAMU, OGUN STATE
      </h3>
      <h3>BY</h3>
      <h3>OLADUNJOYE FUNMILAYO HANNAH</h3>
      <h5>22/1576</h5>

      <h4>
        DEPARTMENT OF HEALTH INFORMATION MANAGEMENT FACULTY OF BASIC MEDICAL
        SCIENCE ADELEKE UNIVERSITY, EDE OSUN STATE
      </h4>
      <h4>NOVEMBER, 2024</h4>
      <p>Welcome to the document page 🎉</p>
    </div>
  );
}

export default DocumentPage;
