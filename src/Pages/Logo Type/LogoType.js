import React from "react";
import classes from "./LogoType.module.css";
import logo2 from "../../Assets/logo2.svg";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LogoType() {
      const [brand, updatator] = useState([]);
      const navigate = useNavigate();

      const changeBrand = () => {
        const newbrand = [
          {brand: "Benz", model: "Mustang", year: "1963", color: "red"},
          {brand: "Toyota", model: "Venza", year: "1923", color: "yello"},
          {brand: "Nissan", model: "Pickup", year: "1244", color: "blue"},
          {brand: "Golf", model: "Mustang", year: "1943", color: "green"},
          {brand: "Mitshubishi", model: "Mustang", year: "1964", color: "black"}
        ];
        console.log(newbrand);
      
        updatator(newbrand); 
      };

      const navigateHome = () => {
        navigate("/logomark");
      };
      const navigateTableofContent = () => {
        navigate("/tableofcontent");
      }

      // const changeBrand2 = () => {
      //   const newbrand = {
      //     brand: "Ford",
      //     model: "Mustang",
      //     year: "1964",
      //     color: "red"
      //   };
      //   setBrand(newbrand);
      // };

      // useEffect(() => {
      //   changeBrand();
      // }, []);

  return (
    <div>
          {brand.length > 0 ? (
          <table>
            <thead>
              <th>S/N</th>
              <th>brand</th>
              <th>model</th>
              <th>year</th>
              <th>color</th>
            </thead>
            <tbody>
              {brand.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data?.brand}</td>
                <td>{data?.model}</td>
                <td>{data?.year}</td>
                <td>{data?.color}</td>
              </tr>
              ))}
            </tbody>
          </table>
          ): (
            <p>no data</p>
          )}
 
          <p onClick={changeBrand}>Benz</p>

      <div className={classes.HeadSection}>
        <div className={classes.SubSection}>
          <p>{brand[0]?.model}</p>
          <p onClick={navigateHome}>Ford</p>
        </div>
          {/* <button onClick={navigateTableofContent}>Next</button> */}
        <div className={classes.SubSection}>
          <p>Logotype</p>
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
          <h1>LOGOTYPE</h1>
        </div>
        <div className={classes.maintextbody}>
          <div className={classes.textbody}>
            <p>
              The BDO Grotesk medium, chosen as the logotype for Nirakara,
              captures the brand's essence with its modern and sophisticated
              design. The font's clean lines and balanced proportions create a
              visually pleasing and easily recognizable logo, reflecting
              Nirakara's commitment to precision and innovation.
            </p>
          </div>
          <div className={classes.textbody}>
            <p>
              This versatile and free-for-commercial-use font lends a
              contemporary edge to the brand's visual communication, ensuring
              consistency and legibility across various platforms and materials.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.Logo}>
        <img src={logo2} />
        {/* <h1>NIRAKARA &trade;</h1> */}
      </div>
    </div>
  );
}

export default LogoType;
