import React, {useState} from 'react';
import './Login.css';
import Auth from './auth/Auth'
import Register from './register/Register';

const Login = ({addToken}) => {

    const [form, setForm] = useState('auth');

    const setAuth = () => setForm('auth');
    const setRegister = () => setForm('register');

    if (form === 'auth')
        return(<Auth setRegisterPage={setRegister} addToken={addToken}/>);
    else if (form === 'register')
        return(<Register setAuthPage={setAuth}/>);
};

export default Login;