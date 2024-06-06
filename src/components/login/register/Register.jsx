import './Register.css';
import {FaUser, FaLock, FaEnvelope} from "react-icons/fa";

const Register = ({setAuthPage}) => {

    const handle = () => setAuthPage();

    const delay = (delayInms) => {return new Promise(resolve => setTimeout(resolve, delayInms));};

    const handleRegister = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/register", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "username": event.target.username.value,
                "password": event.target.password.value,
                "email": event.target.email.value
            })})
                .then(response => {
                    if (response.ok) {
                        alert("Пользователь успешно зарегистрирован");
                        delay(3000);
                        handle();
                    } else {
                        alert("Пользователь уже существует");
                    }
                })
    }

    return (
        <div className="wrapper">
            <div className="form-box">
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <div className="input-box"><input type="text" placeholder="Username" name="username" required/><FaUser className='icon'/></div>
                    <div className="input-box"><input type="password" placeholder="Password" name="password" required/><FaLock className='icon'/></div>
                    <div className="input-box"><input type="email" placeholder="Email" name="email" required/><FaEnvelope className='icon'/></div>
                    <button className='submit' type="submit">Register</button>
                </form>
                <div className="register-link">
                    <p>Already have an account? <button className="button-link" onClick={handle}>Login</button></p>
                </div>
            </div>
        </div>
    );
};

export default Register