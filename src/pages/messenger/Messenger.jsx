import react from "react";
import "./Messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
const Messenger = () => {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input type="text" placeholder="Search For Friends" className="chatMenuInput" />
                <Conversation/>   <Conversation/> 
                <Conversation/>   <Conversation/> 
            </div>
        </div>
        <div className="chatBox">
        <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                <Message/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>

                <Message/>
                <Message/>
              </div>
            <div className="chatBoxBottom">
                <textarea placeholder="write something..." className="chatMessageInput"></textarea>
                <button className="chatSubmitButton">Submit</button>
            </div>
        </div>
        </div>
        <div className="chatOnline">
        <div className="onlineWrapper">
            <ChatOnline/>
        </div>
        </div>
        </div>
    </>
  );
};
export default Messenger;
