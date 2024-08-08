import React from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";

const NavB = (props) => {
  return (
    <div>
      <nav>
        
        <NavLink to={`/ac${props.num}`}>
          <img src={localStorage.getItem("profPic")} alt="" />
        </NavLink>

        {/* <Icon icon="fa-solid fa-user"/> */}
        <Icon icon="fa-solid fa-screwdriver-wrench" />
        <div className="m">
          <Icon icon="fa-solid fa-house" />
        </div>
        <Icon icon="fa-solid fa-magnifying-glass" />
        <Icon icon="fa-solid fa-bars" />
      </nav>
    </div>
  );
};

export default NavB;
