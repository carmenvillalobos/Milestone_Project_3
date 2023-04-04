import React, { useState } from "react"
import NavBar from "../components/NavBar";
// import { useNavigate } from "react-router-dom";
import '../assets/css/login.css'

function Login(props){
    // let navigate = useNavigate();
    // const routeChange = () => { 
    //     let path = `newPath`; 
    //     navigate('/');
    //   }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="main">
            <NavBar/>
            <div className="auth">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="example@email.com" id="email" name="email"/>
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder="" id="password" name="password"/>
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}

export default Login