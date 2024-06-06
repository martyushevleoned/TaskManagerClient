import './Auth.css';
import {FaUser, FaLock} from "react-icons/fa";

const Auth = ({setRegisterPage}) => {

    const handle = () => setRegisterPage();

    const delay = (delayInms) => {return new Promise(resolve => setTimeout(resolve, delayInms));};

    const handleLogin = (event) => {
        event.preventDefault();

        console.log(event.target.username.value);
        console.log(event.target.password.value);

        fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "username": event.target.username.value,
                "password": event.target.password.value
            })})
            .then(response => {
                if (response.ok) {
                    alert("Аутентефикация прошла успешно");
                    delay(3000);
                    response.text().then(token => {
                        console.log(token);
                        localStorage.setItem('jwt', token);
                    })
                } else {
                    alert("Ошибка аутентефикации");
                }
            })  
    }

    return (
        <div className="wrapper">
            <div className="form-box">
                <form onSubmit={handleLogin}>
                    <h1>Auth</h1>
                    <div className="input-box"><input type="text" placeholder="Username" name="username" required/><FaUser className='icon'/></div>
                    <div className="input-box"><input type="password" placeholder="Password" name="password" required/><FaLock className='icon'/></div>
                    <button className='submit' type="submit">Login</button>
                </form>
                <div className="register-link">
                    <p>Don't have an account? <button className="button-link" onClick={handle}>Registration</button></p>
                </div>
            </div>
        </div>
    );
};

export default Auth