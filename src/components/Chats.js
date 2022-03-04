import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Chats() {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("httpls://api.chatengine.io/users/me", {
        headers: {
          "project-id": "e92b4cad-c679-4ccd-8b3e-14d249e3296f",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      });
  }, [user, history]);

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Uhichat</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="e92b4cad-c679-4ccd-8b3e-14d249e3296f"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chats;
