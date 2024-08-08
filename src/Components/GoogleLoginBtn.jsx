import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginBtn = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse?.credential);
          localStorage.setItem("UserName", decoded.name);
          localStorage.setItem("profPic", decoded.picture);
          localStorage.setItem("Email", decoded.email);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginBtn;
