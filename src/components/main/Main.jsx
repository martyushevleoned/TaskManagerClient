//import React, {useState} from 'react';
import './Main.css'

function Main({getToken, removeToken}) {
  return(
    <div className='body-main'>
      <div className='wrap'>
        <div className='flex user-bar'>
          <div className='border'>
            <div><span>Username: </span></div>
            <div><span>Email: </span></div>
            <button onClick={removeToken}>Logout</button>
          </div>
          <div className='border tag'>
            <div><span>Tag info: </span></div>
          </div>
        </div>
        <div className='flex'>
          <div className='border tasks'>
            <div><span>task1</span></div>
            <div><span>task2</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
