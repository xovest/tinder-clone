import React, { useState } from 'react'
import './TinderCards.css';
import TinderCard from "react-tinder-card"

function TinderCards() {
  const [people, setPeople] = useState([{
    name: 'someone',
    url: 'https://something.jpg'
  }])

  const swiped = (dir, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
  }

  const outOfFrame = name => {
    console.log(name + ' left the screen');
  }

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backdropImage: 'url(' + person.url + ')'}}
              className='card'>
                <h3>{person.name}</h3>
              </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards