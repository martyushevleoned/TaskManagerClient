import React, {useState} from 'react';
import './App.css';
import Login from './login/Login'
import Main from './main/Main'

function App() {

  const [jwt, setToken] = useState('');

  const removeToken = () => setToken('');
  const addToken = (token) => setToken(token);

  if (jwt === '')
    return(<Login addToken={addToken}/>);
  else
    return(<Main jwt={jwt} removeToken={removeToken}/>);
}

export default App;
