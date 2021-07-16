import React , {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
//import database from "./firebase";
//import firestore from "./firestore";
import "./TinderCards.css";
import axios from './axios';

//Hardcoding the image cards
function TinderCards () {
const [people,setPeople] =useState([
    {
        "_id": "60edc8720d7be621403cb7ba",
        "name": "Sundar Pichai",
        "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0mwwYrwdrs3FTyrz1m0Eov9KFqHrGwwORQ&usqp=CAU",
        
    },
    {
        "_id": "60edc8720d7be621403cb7b8",
        "name": "Ross Geller",
        "imgUrl": "https://wallpapercave.com/wp/wp3767398.jpg",
        
    },
    {
        "_id": "60edc8720d7be621403cb7b8",
        "name": "Joey Tribianni",
        "imgUrl": "https://i.quotev.com/img/q/u/18/4/6/bf6erner7d.jpg",
        
    },
    {
        "_id": "60edc8720d7be621403cb7b9",
        "name": "Chandler Bing",
        "imgUrl": "https://cdn.wallpapersafari.com/10/13/2nIwsB.jpg",
        
    },
    {
        "_id": "60edc8720d7be621403cb7b7",
        "name": "Randeep Rai",
        "imgUrl": "https://i.pinimg.com/originals/be/ae/9f/beae9f8abb1fc41f40ab4e2922e1fccc.jpg",
        
    },
    {
        "_id": "60edc1ce0d7be621403cb7ae",
        "name": "Ashwin Kumar",
        "imgUrl": "https://pbs.twimg.com/profile_images/1332702772500652034/Nc2apxQQ_400x400.jpg",
        
    },
]);

//Using MongoDB or Firebase to pull the images from database
useEffect(() => {
    async function fetchData() {
        const req = await axios.get('/tinder/card');

        setPeople(req.data);
    }
    fetchData();
    
}, []);

return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
        {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}>
                <div style={{backgroundImage: `url(${person.imgUrl})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
    </div>
    </div>
    
);
        }              
export default TinderCards;


