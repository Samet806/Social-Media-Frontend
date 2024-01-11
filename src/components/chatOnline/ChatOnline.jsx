import React from 'react'
import "./ChatOnline.css"
const ChatOnline = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="chatOnline">

      <div className="chatOnlineFriend" >
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src={
              PF + "person/noAvatar.png"
            }
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">dsad</span>
      </div>

  </div>
  )
}

export default ChatOnline