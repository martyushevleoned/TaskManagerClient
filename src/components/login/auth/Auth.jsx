import './Auth.css';
import {FaUser, FaLock} from "react-icons/fa";

const Auth = ({setRegisterPage}) => {

    const handle = (event) => setRegisterPage();

    return (
        <div className="wrapper">
            <div className="form-box">
                <form>
                    <h1>Auth</h1>
                    <div className="input-box"><input type="text" placeholder="Username" name="username" required/><FaUser className='icon'/></div>
                    <div className="input-box"><input type="password" placeholder="Password" name="password" required/><FaLock className='icon'/></div>
                    <button className='submit' type="submit">Register</button>
                </form>
                <div className="register-link">
                    <p>Don't have an account? <button className="button-link" onClick={handle}>Login</button></p>
                </div>
            </div>
        </div>
    );
};

export default Auth