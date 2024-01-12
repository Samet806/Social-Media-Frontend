import React, { useEffect, useState } from "react";
import "./Conversation.css";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';


const Conversation = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { conversation, currentUser,search } = props;

  const [user, setUser] = useState(null);

  useEffect(() => {
    let friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users/?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img
        src={
          user
            ? PF + "person/" + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        className="conversationImg"
        alt=""
      />
      <span className="conversationName">{user ? user.username:  <CircularProgress />}</span>
    </div>
  );
};

export default Conversation;
