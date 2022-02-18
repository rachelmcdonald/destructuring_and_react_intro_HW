import React from 'react';
import './App.css';

function App() {
  const age = 31;
  const name = "Rachel";

  return (
    <div>
        <h1 className='title'>Hello World! &#128075; &#127758;</h1>
        <p>Welcome to my first React App!</p>
        <p>My name is {name} and I am {age} years old</p>
    </div>
  );
}

export default App;