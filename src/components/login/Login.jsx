import React, {useState} from 'react';
import './Login.css';
import {FaEnvelope, FaUser, FaLock} from "react-icons/fa";

const LoginRegister = () => {

    const [menu, setMenu] = useState('login');
    const loginLink = () => setMenu('login')
    const registerLink = () => setMenu('register');
    

    const handleLogin = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "username": event.target.username.value,
                "password": event.target.password.value
            })
        })
            .then(response => {
                if (response.ok) {
                    response.text().then(token => {
                        console.log(token);
                        localStorage.setItem('jwt', token);
                    });
                } else {
                    response.text().then(text => alert(text));
                }
            });
    }

    const handleRegister = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/register", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "username": event.target.username.value,
                "password": event.target.password.value,
                "email": event.target.email.value
            })
        })
            .then(response => {
                if (response.ok) {
                    console.log('пользователь зарегистрирован');
                    loginLink();
                } else {
                    response.text().then(text => alert(text));
                }
            });
    }
      
    if (menu === 'login')
        return (
            <div className="body">
                <div className="wrapper login">
                    <div className="form-box">
                        <form onSubmit={handleLogin}>
                            <h1>Login</h1>
                            <div className="input-box"><input type="text" placeholder="Username" name="username" required/><FaUser className='icon'/></div>
                            <div className="input-box"><input type="password" placeholder="Password" name="password" required/><FaLock className='icon'/></div>
                            <button className='submit' type="submit">Login</button>
                            <div className="register-link">
                                <p>Don't have an account? <button className="button-link" onClick={registerLink}>Registration</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    else if (menu === 'register')
        return (
            <div className="body">
                <div className="wrapper register">
                    <div className="form-box">
                        <form onSubmit={handleRegister}>
                            <h1>Registration</h1>
                            <div className="input-box"><input type="text" placeholder="Username" name="username" required/><FaUser className='icon'/></div>
                            <div className="input-box"><input type="password" placeholder="Password" name="password" required/><FaLock className='icon'/></div>
                            <div className="input-box"><input type="email" placeholder="Email" name="email" required/><FaEnvelope className='icon'/></div>
                            <button className='submit' type="submit">Register</button>
                            <div className="register-link">
                                <p>Already have an account? <button className="button-link" onClick={loginLink}>Login</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
};

export default LoginRegister