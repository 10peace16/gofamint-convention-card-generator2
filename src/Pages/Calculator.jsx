import React from "react";
import classes from "./Calculator.module.css";
import { useState, useEffect } from "react";
import deleteIcon from "../Assets/delete.png";

function Calculator() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    displayWelcome();
  }, []);

  const handleButtonClick = (value) => {
    setDisplay(display === "" ? value : display + value);
  };
  const handleCalculate = () => {
    try {
      const result = eval(display.replace(/÷/g, "/").replace(/×/g, "*"));
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Math error");
    }
  };
  const handleClear = () => {
    setDisplay("");
  };
  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };
  const handleToggleSign = () => {
    if(!display) return;
    if (display.startsWith("-")) {
      setDisplay(display.slice(1));
    } else {
      setDisplay("-" + display);
    }
  };
  const handlePercentage = () => {
    try {
      const result = eval(display.replace(/÷/g, "/").replace(/×/g, "*")) / 100;
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Math error");
    }
  };
  const displayWelcome = () => {
    const text = "Welcome to the Calculator!";
    let index = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, index + 1));
      index++;

      if(index === text.length){
        clearInterval(interval);
        setTimeout(() => {
          setDisplay("");

        }, 2000);
      } 
    }, 100);
  };

  return (
    <div className={classes.calculator}>
      <div>
        <div className={classes.display}>{display}</div>
        <div className={classes.buttons}>
          <button onClick={handleDelete}><img src={deleteIcon} /></button>
          <button onClick={handleClear}>AC</button>
          <button onClick={ handlePercentage}>%</button>
          <button onClick={() => handleButtonClick("÷")}>÷</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("×")}>×</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={handleToggleSign}>+/-</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick ={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;