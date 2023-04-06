import React, { useState } from "react"
import NavBar from "../components/NavBar";
import Button from "react-bootstrap/Button"
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
        <div className="background">
            <NavBar/>
            <div className="auth">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email"><b>Email</b></label>
                    <input value={email} className="form-control mb-3" onChange={(e) => setEmail(e.target.value)} type='email' placeholder="example@email.com" id="email" name="email"/>
                    <label htmlFor="password"><b>Password</b></label>
                    <input value={pass} className="form-control mb-3" onChange={(e) => setPass(e.target.value)} type='password' placeholder="" id="password" name="password"/>
                    <Button type="submit">Log In</Button>
                </form>
                {/* <button className="link-btn" onClick={() => props.onFormSwitch('signUp')}>Don't have an account? Register here.</button> */}
                <button className="link-btn">Don't have an account? Register here.</button>
            </div>
        </div>
    )
}

export default Login