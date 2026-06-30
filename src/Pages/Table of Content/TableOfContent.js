import React from "react";
import classes from "./TableOfContent.module.css";

function TableOfContent() {
  return (
    <div>
      <div className={classes.HeadSection}>
        <div className={classes.SubSection}>
          <p>Topic - 1.1</p>
          <p>Page no. - 2</p>
        </div>
        <div className={classes.SubSection}>
          <p>Table of content</p>
          <p>Introduction</p>
        </div>
        <div className={classes.SubSection}>
          <p>Designed by @rushidesign</p>
          <p>version 10</p>
        </div>
      </div>
      <hr className={classes.line} />
      <div className={classes.text}>
        <h1>TABLE OF CONTENT</h1>
      </div>
      <div className={classes.containerSec}>
        <div className={classes.SubContainer}>
          <div className={classes.Number}>
            <p className={classes.SubHeader}>1.0</p>
            <section className={classes.List}>
              <p>1.1</p>
              <p>1.2</p>
              <p>1.3</p>
              <p>1.4</p>
              <p>1.5</p>
            </section>
          </div>

          <div className={classes.SubList}>
            <p className={classes.SubHeader}>Introduction</p>
            <section className={classes.List}>
              <p>Table of content</p>
              <p>About the brand</p>
              <p>Our Aim & Vision</p>
              <p>Brand Values</p>
              <p>Tone of voice</p>
            </section>
          </div>
        </div>

        <div className={classes.SubContainerColor}>
          <div className={classes.Number}>
            <p className={classes.SubHeader}>3.0</p>
            <section className={classes.List}>
              <p>3.1</p>
              <p>3.2</p>
            </section>
          </div>

          <div className={classes.SubList}>
            <p className={classes.SubHeader}>Color</p>
            <section className={classes.List}>
              <p>Color pallet</p>
              <p>Combinations</p>
            </section>
          </div>
        </div>
      </div>

      <div className={classes.containerSec2}>
        <div className={classes.SubContainer}>
          <div className={classes.Number}>
            <p className={classes.SubHeader}>2.0</p>
            <section className={classes.List}>
              <p>2.1</p>
              <p>2.2</p>
              <p>2.3</p>
              <p>2.4</p>
              <p>2.5</p>
              <p>2.6</p>
            </section>
          </div>

          <div className={classes.SubList}>
            <p className={classes.SubHeader}>Logo</p>
            <section className={classes.List}>
              <p>Logomark</p>
              <p>Logotype</p>
              <p>Lockup</p>
              <p>Clear space</p>
              <p>Minimum sizes</p>
              <p>Placement</p>
            </section>
          </div>
        </div>

        <div className={classes.SubContainerTypo}>
          <div className={classes.Number}>
            <p className={classes.SubHeader}>4.0</p>
            <section className={classes.List}>
              <p>4.1</p>
              <p>4.2</p>
              <p>4.3</p>
              <p>4.4</p>
            </section>
          </div>

          <div className={classes.SubList}>
            <p className={classes.SubHeader}>Typography</p>
            <section className={classes.List}>
              <p>Typeface</p>
              <p>Weights</p>
              <p>Type Scaling</p>
              <p>Common mistakes</p>
            </section>
          </div>
        </div>
      </div>

      <div className={classes.SubContainer1}>
        <div className={classes.Number}>
          <p className={classes.SubHeader}>5.0</p>
        </div>

        <div className={classes.SubList1}>
          <p className={classes.SubHeader}>Brand Application</p>
        </div>
      </div>
    </div>
  );
}
export default TableOfContent;
