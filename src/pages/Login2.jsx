import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import av1 from "../assets/image 1.png";
import Animator from "../Components/Animator";
import GoogleLoginBtn from "../Components/GoogleLoginBtn";

import "../firebaseConfig"; // Add this line prevent firebase not loading error
import { getFirestore, addDoc, collection } from "firebase/firestore";


const Login2 = () => {
  const [Uname, setUname] = useState("");

  const db = getFirestore();
  
  const saveDataToFirestore = async () => {
    const docRef = await addDoc(collection(db, "users"), {
      userName: localStorage.getItem("UserName"),
      email: localStorage.getItem("Email"),
      pic: localStorage.getItem("profPic"),
      status: "عميل",
    });
    alert("Document written to Database");
  };

  const saveD = () => {
    localStorage.setItem("h", 2);
    saveDataToFirestore();
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
