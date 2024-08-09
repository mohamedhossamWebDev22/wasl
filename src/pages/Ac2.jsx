import React from 'react'

import Animator from '../Components/Animator'
import { NavLink } from 'react-router-dom'


const Ac2 = () => {
  const LogOut = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Animator>
      <div>
        <div className="account2">
          <div className="info">
            <img src={localStorage.getItem("profPic")} alt="profile pic" />
            <h1>{localStorage.getItem("UserName")}</h1>
            <div className="details">
              <p>الحالة : <a>أُسطى</a></p>
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
    </div>
  )
}

export default Ac2