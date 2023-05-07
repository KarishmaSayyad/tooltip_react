
import './App.css';
import React, { useState } from 'react';
import Tip from './Tip';

//app function
function App() {

  //set state for position
  const [position, setPosition] = useState('bottom');

  //function which pass position or direction of button

  const select_position = (pos) => {
    console.log(pos);
    setPosition(pos);
  }

  //render app
  return (

    <div className="App" >

       <Tip pos={position} />     {/*Tip component */}

       {/* buttons */}

      <div className='pos_btn'>          
          <button onClick={() => select_position('left')}>Left 👈</button>
          <button onClick={() => select_position('right')}>Right 👉</button>
          <button onClick={() => select_position('top')}>Top 👆</button>
          <button onClick={() => select_position('bottom')}>down 👇</button>
      </div>

    </div>
  );
}

export default App;
