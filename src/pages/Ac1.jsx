import React from "react";
import { NavLink } from "react-router-dom";
import Animator from "../Components/Animator";

const Ac1 = () => {
  const LogOut = () => {
    localStorage.clear();
  };

  return (
    <Animator>
      <div>
        <div className="account1">
          <div className="info">
            <img src={localStorage.getItem("profPic")} alt="profile pic" />
            <h1>{localStorage.getItem("UserName")}</h1>
            <div className="details">
              <p>الحالة : <a>عميل</a></p>
              <p className="emailT">إيميل : <a>{localStorage.getItem("Email")}</a></p>
            </div>
          </div>
          <div className="logOut">
            <NavLink to="/start">
              <button onClick={LogOut}>تسجيل خروج</button>
            </NavLink>
            <NavLink to="/home1">
              <button>رجوع</button>
            </NavLink>
          </div>
        </div>
      </div>
    </Animator>
  );
};

export default Ac1;
