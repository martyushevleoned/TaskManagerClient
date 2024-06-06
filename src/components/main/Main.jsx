import React, {useState} from 'react';
import './Main.css'

function Main({getToken, removeToken}) {
  return(
    <div className='body-main'>
      <div>
        <p>Left</p>
        <button onClick={removeToken}>Logout</button>
      </div>
      <div>
        <p>Right</p>
      </div>
    </div>
  );
}

export default Main;
