import React, { useState } from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";

const NavB = (props) => {
  const [showMenu, setshowMenu] = useState("hideMenu");

  const closeMenu = () => {
    setshowMenu("hideMenu");
  };
  const showM = () => {
    setshowMenu("showMenu");
  };

  return (
    <div>
      <div className={`menu ${showMenu}`}>
        <button onClick={closeMenu}>
          <Icon icon="fa-solid fa-xmark" />
        </button>
        <div className="links">
          <NavLink to={`/home${props.num}`}>الرئيسية</NavLink>
          <NavLink to={`/ac${props.num}`}>حسابي</NavLink>
          <NavLink to={`/msg${props.num}`}>الرسائل</NavLink>
          <NavLink to={`/home${props.num}`}>الأقسام</NavLink>
          <NavLink to={`/contact`}>تواصل معنا</NavLink>
        </div>
      </div>
      <nav>
        <NavLink to={`/msg${props.num}`}>
          <Icon icon="fa-solid fa-message" />
        </NavLink>

        <Icon icon="fa-solid fa-screwdriver-wrench" />

        <div className="m">
          <NavLink to={`/home${props.num}`}>
            <Icon icon="fa-solid fa-house" />
          </NavLink>
        </div>

        <Icon icon="fa-solid fa-magnifying-glass" />
        <button onClick={showM}>
          <Icon icon="fa-solid fa-bars" />
        </button>
      </nav>
    </div>
  );
};

export default NavB;
