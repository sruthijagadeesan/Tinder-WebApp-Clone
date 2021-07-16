import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./ChatScreen.css";

function ChatScreen() {
    const [input,setInput] = useState('');
    const [messages , setMessages] = useState([
        {
           name: "Varun",
           image: "http://im.rediff.com/movies/2012/dec/11sld1.jpg",
           message: "Hey! how is the event going??😃" 
        },
         {
             message: "Yeah perfect!!",
         },
         {
            name: "Varun",
            image: "http://im.rediff.com/movies/2012/dec/11sld1.jpg",
            message: "Great!! then carry on... have fun😊" 
         },
         {
            message: "Okay... talk to you later..Bye😁✌",
        },

    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
          <p className="chatScreen__match">YOU MATCHED WITH VARUN ON 24/01/2021</p>
          {messages.map(message =>(
              message.name ? (
                <div className="chatScreen__message">
                  <Avatar
                  className="chatScreen__image"
                  alt={message.name}
                  src={message.image}
                  />
                  <p className="chatScreen__text">{message.message}</p>
            </div>
              ) : (
                <div className="chatScreen__message"> 
                <p className="chatScreen__textuser">{message.message}</p>
                </div>
              )
              
          ))}
          
              <form className="chatScreeen__input">
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chatScreen__inputField" 
                placeholder="Type a message..." 
                type="text" 
                />
                <button 
                onClick={handleSend}
                type="submit" 
                className="chatScreen__inputButton">SEND</button>
              </form>
        
        </div> 
    );
    
}

export default ChatScreen;