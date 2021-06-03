import { SwipeableDrawer } from '@material-ui/core';
import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";



function TinderCards() {
    const [people, setPeople] = useState([
        {   
            name: "Elon Musk",
            url: 
                " https://res.cloudinary.com/dvwgoe2ep/image/upload/v1622742591/elon-musk_atztnj.jpg"
        },
        {   
            name: "Jeff Bezos",
            url: 
                " https://res.cloudinary.com/dvwgoe2ep/image/upload/v1622742588/jaff-bezos_cic4fe.jpg"
        },
        {   
            name: "Bill Gate",
            url: 
                " https://res.cloudinary.com/dvwgoe2ep/image/upload/v1622742588/billgate_ney3wt.jpg"
        },
        {   
            name: "Naija",
            url: 
                "https://res.cloudinary.com/dvwgoe2ep/image/upload/v1622742588/najia_fw7gn8.jpg"
        },
        
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };
    
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer" >
                {people.map((person) => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up", "dowm"]} 
                           onSwipe={(dir) => swiped(dir, person.name)}
                           onCardLeftScreen={() => outOfFrame(person.name)}>
                            <div style={{backgroundImage: 'url(${person.url})'}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                    </TinderCard>
                    
                ))}
            </div>
        </div>
    );
}

export default TinderCards
