import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import av1 from "../assets/image 1.png";
import Animator from "../Components/Animator";
import GoogleLoginBtn from "../Components/GoogleLoginBtn";


const Login2 = () => {
  const [Uname, setUname] = useState("");

  const saveD = () => {
    localStorage.setItem("h", 2);
  };

  return (
    <>
      <Animator>
        <div className="Login1">
          <div className="Inf">
            <h1>
              ازيك يا <a>اسطى</a>
            </h1>
            <img src={av1} alt="Avatar" />
          </div>

          <p className="hint">{Uname}</p>

          <div className="GoogleL">
            <GoogleLoginBtn />

            <br />
            <button onClick={saveD} className="Lbtn">
              <NavLink to="/home2">تسجيل الدخول</NavLink>
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

export default Login2;
