import React, {useEffect} from 'react';
import soundfile from "./here-i-am.mp3"

const List = ({people, clicked}) => {

  useEffect(() => {
    if(people.length != 0){
    const audioE1 = document.getElementsByClassName("audio-element")[0]
    audioE1.play()
    }
  },[people])


  return (
    <>
      {people.map((person) => {
        const {id, name, age, image} = person;
        return <>
        {}
        <article key={id} className="person">
          <img src={image} alt="person image"/>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            <button onClick={() =>{ 
              clicked(id)
            }} className="wish-btn">send a wish</button>
          </div>
          <div>
              <audio className="audio-element">
              <source src={soundfile}></source>
              </audio>
          </div>
        </article>
        </>
      })}
    </>
  );
};

export default List;
