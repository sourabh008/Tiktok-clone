import React,{useState} from 'react'
import "./videoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, shares, messages }) {
    const [liked,setLiked]=useState(false);
    // const [count,setCount]=useState(0);
   
    const trigger=()=>{
        if(liked){
            // setCount(count-1);
            setLiked(false);
        }else{
            // setCount(count+1);
            setLiked(true)
        }
        console.log(liked)
    }
    return (
        <div className="videoSidebar">
            {liked?<div className="videoSidebar__button">
            <FavoriteIcon fontSize="large" onClick={trigger} />
            <p>{liked ? likes + 1 : likes}</p>
            </div>
            :
            <div className="videoSidebar__button">
                <FavoriteBorderIcon  
             fontSize="large" onClick={trigger}/>        
                {/* <p>{count}</p> */}
                <p>{liked ? likes + 1 : likes}</p>
            </div>}

           
            <div className="videoSidebar__button">
            <MessageIcon/>
            <p>{messages}</p>
 </div>
 <div className="videoSidebar__button">
            <ShareIcon/>
            <p>{shares}</p>
        </div>
        </div>
    )
}

export default VideoSidebar
