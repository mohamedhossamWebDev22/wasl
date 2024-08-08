import React from "react";

import { NavLink } from "react-router-dom";

import Banner from "../assets/undraw_under_construction_46pa.png";
import Animator from "../Components/Animator";

const Start = () => {
  return (
    <>
      <Animator>
        <div className="startPage">
          <div className="Carousel">
            <img src={Banner} alt="Banner" />
          </div>
          <div className="txt">
            <h3>تسجيل دخول كـ</h3>
          </div>
          <div className="btns">
            <NavLink to={"/login1"}>
              <button>عميل</button>
            </NavLink>
            <NavLink to={"/login2"}>
              <button>صنايعي</button>
            </NavLink>
          </div>
        </div>
      </Animator>
    </>
  );
};

export default Start;
