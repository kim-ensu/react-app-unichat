import React from "react";
import { GoogleOutlined } from "@ant-design/icons";

function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Wellcome to Unichat!</h2>
        <div className="login-button google">
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
}

export default Login;
