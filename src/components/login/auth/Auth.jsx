import {FaUser, FaLock} from "react-icons/fa";
import React, {useState} from 'react';

const Auth = ({setRegisterPage, addToken}) => {


    const delay = (delayInms) => {return new Promise(resolve => setTimeout(resolve, delayInms));};
    const [exit, setExit] = useState('');
    const [wa, setWa] = useState('');
    const [ca, setCa] = useState('');

    const handle = () => {
        setExit("exit");
        delay(200).then(() => setExit(''));
        delay(200).then(() => setRegisterPage());
    }

    const handleLogin = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "username": event.target.username.value,
                "password": event.target.password.value
            })})
            .then(response => {
                if (response.ok) {
                    setCa("ca");
                    delay(200).then(() => setCa(""));
                    delay(200).then(() => response.text().then(token => addToken(token)));
                } else {
                    setWa("wa");
                    delay(200).then(() => setWa(""));
                }
            })  
    }

    return (
        <div className='body'>
            <div className={exit + " wrapper"}>
                <div className="form-box">
                    <form onSubmit={handleLogin}>
                        <h1>Auth</h1>
                        <div className="input-box"><input type="text" placeholder="Username" name="username" required/><FaUser className='icon'/></div>
                        <div className="input-box"><input type="password" placeholder="Password" name="password" required/><FaLock className='icon'/></div>
                        <button className={wa + ' submit ' + ca} type="submit">Login</button>
                    </form>
                    <div className="register-link">
                        <p>Don't have an account? <button className="button-link" onClick={handle}>Registration</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth