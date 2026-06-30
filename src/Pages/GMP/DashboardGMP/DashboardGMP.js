import React from "react";
import classes from "./DashboardGMP.module.css";
import UserIcon from "../../../Assets/GMP/DashboardImage/UserIcon.svg";
import Revenue from "../../../Assets/GMP/DashboardImage/RevenueIcon.svg";
import TicketIcon from "../../../Assets/GMP/DashboardImage/TicketIcon.svg";
import VoteIcon from "../../../Assets/GMP/DashboardImage/VoteIcon.svg";

function DashboardGMP() {
  const items = [
    { id: "fans", title: "Fans", img: UserIcon, count: "1,018", percent: "+4% this month" },
    { id: "revenue", title: "Revenue", img: Revenue, count: "100,200", percent: "+4% this month" },
    { id: "ticket", title: "Tickets", img: TicketIcon, count: "182", percent: "+4% this month" },
    { id: "votes", title: "Votes", img: VoteIcon, count: "1,375", percent: "+4% this month" },
  ];
  return (
    // <div className={classes.dashboard}>
    //   <div className={classes.itemBox}>
    //         {items.map(item => (
    //           <div key={item.id} className={classes.item}>
    //               <div className={classes.subItem}>
    //                 <div className={classes.subItem}>
    //                   <img src={item.img} alt={item.title} />
    //                   <h2>{item.count}</h2>
    //                   <h4>{item.title}</h4>
    //                 </div>
    //                 <div>
    //                   <p>{item.percent}</p>
    //                 </div>
    //               </div>
    //             </div>
    //         ))}
    //   </div>
    // </div>

    <div className={classes.dashboard}>
      <div className={classes.itemBox}>
        {items.map((item) => (
          <div key={item.id} className={classes.item}>
            <div className={classes.itemBody}>
              <div className={classes.itemText}>
                <img src={item.img} alt={item.title} />
                <h2>{item.count}</h2>
                <h4>{item.title}</h4>
              </div>
              <div className={classes.itemHeader}>
                <p>{item.percent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardGMP;
