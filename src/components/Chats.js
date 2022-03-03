import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

function Chats() {
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Uhichat</div>
        <div className="logout-tab">Logout</div>
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
