import React from "react";
import classes from "./LogoMark.module.css";
import logoimage from "../../Assets/logo.svg";

function LogoMark() {
  return (
    <div>
      <div className={classes.HeadSection}>
        <div className={classes.SubSection}>
          <p>Topic - 2.1</p>
          <p>Page no. - 10</p>
        </div>
        <div className={classes.SubSection}>
          <p>Logo design</p>
          <p>Logomark</p>
        </div>
        <div className={classes.SubSection}>
          <p>Designed by @rushidesign</p>
          <p>version 10</p>
        </div>
      </div>
      <hr className={classes.line} />
      <div className={classes.MainContainer}>
        <div className={classes.text}>
          <h1>LOGOMARK</h1>
        </div>
        <div className={classes.maintextbody}>
          <div className={classes.textbody}>
            <p>
              Nirakra's architectural brand is embodied in its logo—a
              sharp-edged "N" mark forming an intersecting and asymmetrical
              triangle in negative space.
            </p>
          </div>
          <div className={classes.textbody}>
            <p>
              This design symbolizes our commitment to precision, innovation,
              and the seamless integration of contrasting elements. The
              interconnectedness of the logo's parts represents our holistic
              approach to architecture
            </p>
          </div>
        </div>
      </div>
      <div className={classes.Logo}>
        <img src={logoimage} />
      </div>
    </div>
  );
}

export default LogoMark;
