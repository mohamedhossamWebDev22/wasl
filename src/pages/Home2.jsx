import React from "react";
import Animator from "../Components/Animator";
import NavB from "../Components/navB";
import Icon from "../Components/Icon";
import { NavLink } from "react-router-dom";

const Home2 = () => {
  return (
    <Animator>
      <div>
        <div className="bar">
          <NavLink to="/msg2">
            <Icon icon="fa-solid fa-message" />
          </NavLink>
          <h1>الرئيسية</h1>
          <NavLink to="/clk2">
            <Icon icon="fa-solid fa-clock" />
          </NavLink>
        </div>

        <div className="content">
          <div className="works">
            <button>
              <Icon icon="fa-solid fa-calendar-days"/>
              جدول</button>
            <button>
              <Icon icon="fa-solid fa-screwdriver-wrench"/>
              خدمات</button>
            <button>
              <Icon icon="fa-solid fa-tag"/>
              عروض</button>
          </div>
          <div className="btnSection">
            <button>الرسائل</button>
          </div>
        </div>

        <NavB num="2" />
      </div>
    </Animator>
  );
};

export default Home2;
