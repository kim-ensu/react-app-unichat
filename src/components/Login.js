import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Wellcome to Unichat!</h2>
        <div className="login-button google">
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div className="login-button google">
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
