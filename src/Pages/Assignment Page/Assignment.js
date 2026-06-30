import React from "react";
import classes from "./Assignment.module.css";
import edvice from "../../Assets/EDVICE.svg";
import pics from "../../Assets/pics.svg";
import pics2 from "../../Assets/pics2.svg";

function assignment() {
  return (
    <div>
        <div className={classes.MainContainer}>
            <div className={classes.FirstSubContainer}>
                <div className={classes.FirstInnerContA}>
                    <div className={classes.Container}>
                        <div>
                            <img src={edvice}  className={classes.Edvice}/>
                        </div>
                        <div className={classes.Text}>
                            <p>Dream.</p>
                            <p>Apply.</p>
                            <p>Achieve.</p>

                            
                        <div ClassName={classes.Link}>
                            <p>WWW.EDVICE.COM</p>
                        </div>
                        </div>
                        <img className={classes.pics} src={pics} />
                    </div>
                        </div>
                        <div className={classes.SecondInnerContA}>
                            <h1>Second Inner ContA</h1>
                        </div>
                    </div>
                    <div className={classes.SecondSubContainer}>
                        <div className={classes.FirstInnerA}>
                        <div className={classes.FirstInner1}>
                             <h1>FirstInner1</h1>
                    </div>
                    <div className={classes.FirstInner2}>
                        <h1>FirstInner2</h1>
                    </div>
                </div>
                <div className={classes.SecondInnerB}>
                    <h1>SecondInner</h1>
                </div>
                <div className={classes.ThirdInnerC}>
                    <div className={classes.ThirdInner1}>
                        <h1>ThirdInner1</h1>
                    </div>
                    <div className={classes.ThirdInner2}>
                        <h1>ThirdInner2</h1>
                    </div>
                </div>
                <div className={classes.FourthInnerD}>
                    <h1>FourthInner</h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default assignment;
