import './Main.css'
import Tasks from './tasks/Tasks';
import React, {useEffect, useState} from 'react';
import { FaSignOutAlt, FaUser, FaEnvelope} from "react-icons/fa";

function Main({jwt, removeToken}) {
  
  const [json, setJson] = useState({email:"email", username:"username"})

  useEffect(()=>{
    fetch("http://localhost:8080/info", {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${jwt}`
      }
    })
      .then(response => {
          if (response.ok) {
            response.json().then(json => setJson(json));
          } else {
            alert("Ошибка аутентефикации");
          }
      })  
  });

  return(
    <div className='body-main'>
      <div className='wrap'>
        <div className='flex user-bar border'>
          <div className='info'>
            <div className='user-info'><FaUser className='image'/>{json.username}</div>
            <div className='user-info'><FaEnvelope className='image'/>{json.email}</div>
          </div>
          <div className='signout'>
            <FaSignOutAlt className='image' onClick={removeToken}/>
          </div>
        </div>
        <div className='flex'>
          <div>
            <Tasks getToken={jwt}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
