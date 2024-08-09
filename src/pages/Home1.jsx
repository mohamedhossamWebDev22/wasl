import React from "react";

import NavB from "../Components/navB";
import Animator from "../Components/Animator";
import Icon from "../Components/Icon";
import { NavLink } from "react-router-dom";

const Home1 = () => {
  return (
    <Animator>
      <div>
        <div className="bar">
          <NavLink to="/msg1">
            <Icon icon="fa-solid fa-message"/>
          </NavLink>
          <h1>الرئيسية</h1>
          <NavLink to="/clk1">
            <Icon icon="fa-solid fa-clock"/>
          </NavLink>
        </div>

        <div className="content">
          <div className="works">
            <button>نجارة</button>
            <button>سباكة</button>
            <button>تكييفات</button>
            <button>كهرباء</button>
            <button>دهانات</button>
            <button>تلفزيون و دش</button>
          </div>
          <div className="btnSection">
            <button>رفع طلب</button>
          </div>
        </div>
        
        <NavB num = "1" />
      </div>
    </Animator>
  );
};

export default Home1;
