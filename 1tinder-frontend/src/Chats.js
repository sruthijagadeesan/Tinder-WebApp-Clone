import React from 'react';
import "./Chats.css"
import Chat from "./Chat";

function Chats() {
    return <div className="chats">
        <Chat 
        name="Varun"
        message="Okay... talk to you later..Bye😁✌"
        timestamp="15 mins ago"
        profilePic="http://im.rediff.com/movies/2012/dec/11sld1.jpg"
        />
        <Chat 
        name="DQ"
        message="Good Morning... ✨🙏"
        timestamp="50 mins ago"
        profilePic="https://static.toiimg.com/photo/msid-71361286/71361286.jpg?30010"
        />
        <Chat 
        name="Nivin"
        message="Hey...Just finished work😅"
        timestamp="8 hours ago"
        profilePic="https://i2.cinestaan.com/image-bank/1500-1500/106001-107000/106366.jpg"
        />
        <Chat 
        name="Cole Sprouse"
        message="Good Night!!!💖😍🤍"
        timestamp="12 hours ago"
        profilePic="https://pbs.twimg.com/profile_images/826302313014779905/yArfSy1J.jpg"
        />
        <Chat 
        name="Ashok"
        message="Have a nice day!👍🎉😃"
        timestamp="1 day ago"
        profilePic="http://starsunfolded.com/wp-content/uploads/2017/04/Ashok-Selvan.jpg"
        />
    </div>
    
}

export default Chats;