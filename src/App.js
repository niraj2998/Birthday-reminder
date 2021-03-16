import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data)
  const [sendWishTo, setSendwish] = useState(false)

  const sendWish = (id) => {
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople)
    setSendwish(true)
    setTimeout(() => setSendwish(false), 1000);
  }

  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      {sendWishTo && <p className="wish">WISH SENT!</p>}
      <List people={people} clicked={sendWish}/>
      <button onClick={() => setPeople([]) }>clear all!</button>
    </section>
  </main>
}

export default App;
