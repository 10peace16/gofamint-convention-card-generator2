import React from "react";
import classes from "./IntroductionPage.module.css";

function IntroductionPage() {
  return (
    <div>
      <div className={classes.HeadSection}>
        <div className={classes.SubSection}>
          <p>Topic - 1.0</p>
          <p>Page no. - 1</p>
        </div>
        <div className={classes.SubSection}>
          <p>Introduction</p>
        </div>
        <div className={classes.SubSection}>
          <p>Designed by @rushidesign</p>
          <p>version 10</p>
        </div>
      </div>
      <hr className={classes.line} />
      <div className={classes.text}>
        <h1>INTRODUCTION</h1>
      </div>
      <div className={classes.containerSec}>
        <div>
          <p>
            Welcome to the Nirakara Brand Guidelines, designed to provide a
            comprehensive framework for effectively representing our brand
            identity. These guidelines ensure consistency and coherence across
            all brand touchpoints, enabling us to communicate our values,
            personality, and unique offerings to our target audience.
          </p>
        </div>
        <div>
          <p>
            Our brand guidelines empower us to connect with our audience,
            establish a strong presence, and tell our unique story. By
            maintaining consistency and adhering to these guidelines, we can
            cultivate trust, showcase our offerings, and foster loyalty. Let
            these guidelines be our compass as we build and evolve our brand,
            leaving a lasting impact on our audience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;
