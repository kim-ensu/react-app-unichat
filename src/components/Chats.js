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

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
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
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL)
          .then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios.post("https://api.chatengine.io/users/", formdata, {
              headers: { "private-key": "47bd4e88-1bf5-462d-ad20-dc670441a38b" },
            });
          })
          .then(() => setLoading(false))
          .catch((error) => console.log(error));
      });
  }, [user, history]);

  if (!user || loading) return "Loading...";

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
        projectID="e92b4cad-c679-4ccd-8b3e-14d249e3296f"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}

export default Chats;
