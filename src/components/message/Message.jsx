import React from 'react'
import "./Message.css"
import TimeAgo from 'react-timeago';
import moment from 'moment';
import 'moment/locale/tr';

const Message = ({own,message}) => {

  return (
    <div className={ own? "message own" :"message"}>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <p className="messageText">{message ? message.text : ""}</p>
    </div>
    <div className="messageBottom">  <TimeAgo date={moment(message?.createdAt).toDate()} formatter={ customFormatter} /></div>
  </div>
  ) 
}
const customFormatter = (value, unit, suffix) => {
  if (unit === 'second' && value < 60) {
    return `${value} saniye önce`;
  }

  if (unit === 'minute' && value < 60) {
    return `${value} dakika önce`;
  }

  if (unit === 'hour' && value < 24) {
    return `${value} saat önce`;
  }

  if (unit === 'day' && value < 7) {
    return `${value} gün önce`;
  }

  // Default behavior (for weeks, months, and years)
  return moment().locale('tr').startOf(unit).fromNow();
};
export default Message

