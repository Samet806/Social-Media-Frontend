import "./post.css";
import MoreVert from '@mui/icons-material/MoreVert';
import axios from "axios";
// import { Users } from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import TimeAgo from 'react-timeago';
import moment from 'moment';
import 'moment/locale/tr';
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [like,setLike] = useState(post.likes.length)
  const [user,setUser] = useState([])
  const [isLiked,setIsLiked] = useState(false)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser}  =useContext(AuthContext)
  
  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id,post.likes])

  useEffect(()=>{
    const fetchUser=async ()=>{
      try {
        const res = await axios.get(`/users/?userId=${post.userId}`);
        setUser(res.data);
      } catch (error) {
        console.error("Kullanıcı bulunamadı:", error);
      }
    }
    fetchUser();
  },[post.userId])

  const likeHandler =()=>{
    try{
         axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
    }catch(err)
    {
       console.log(err)
    }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  

  return ( 
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}> <img
              className="postProfileImg"
              src={ user ? `${PF}person/${user.profilePicture}` : PF+"person/noAvatar.png" }
              alt=""
            /></Link>
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">
            <TimeAgo date={moment(post.createdAt).toDate()} formatter={ customFormatter} />
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+"post/"+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
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