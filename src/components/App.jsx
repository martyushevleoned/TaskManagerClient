import React, {useState} from 'react';
import './App.css';
import Login from './login/Login'
import Main from './main/Main'

function App() {

  const [jwt, setToken] = useState('');

  const removeToken = () => setToken('');
  const addToken = (token) => setToken(token);
  const getToken = () => {return jwt};

  if (jwt === '')
    return(<Login addToken={addToken}/>);
  else
    return(<Main getToken={getToken} removeToken={removeToken}/>);
}

export default App;
