import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from "../firebase";
import firebase from "firebase/app";

function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Wellcome to Unichat!</h2>
        <div
          className="login-button google"
          onCLick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
}

export default Login;
