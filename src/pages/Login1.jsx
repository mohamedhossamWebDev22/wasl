import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import av2 from "../assets/image 2.png";
import Animator from "../Components/Animator";
import GoogleLoginBtn from "../Components/GoogleLoginBtn";

const Login1 = () => {
  const [Uname, setUname] = useState("");

  const saveD = () => {
    localStorage.setItem("h", 1);
  };

  return (
    <>
      <Animator>
        <div className="Login1">
          <div className="Inf">
            <h1>
              ازيك يا <a>فندم</a>
            </h1>
            <img src={av2} alt="Avatar" />
          </div>

          <p className="hint">{Uname}</p>

          <div className="GoogleL">
            <GoogleLoginBtn/>

            <br />
            <button onClick={saveD} className="Lbtn">
              <NavLink to="/home1">تسجيل الدخول</NavLink>
            </button>
            <br />
            <button className="Lbtn">
              <NavLink to="/start">رجوع</NavLink>
            </button>
          </div>
        </div>
      </Animator>
    </>
  );
};

export default Login1;
