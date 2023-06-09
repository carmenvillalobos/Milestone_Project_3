import React, { useState } from "react"
import NavBar from "../components/NavBar";
import Button from "react-bootstrap/Button"
import '../assets/css/login.css'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    function handleChange() {
        let path = `/signup`
        navigate(path);
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
    

    try {
        const response = await axios.post('http://localhost:3001/users/login', {
        email,  
        password,
        })
  
        localStorage.setItem('token', response.data.token);
        setMessage('Login successful!');
      } catch (error) {
        setMessage('Invalid email or password.');
      }
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
                    <input value={password} className="form-control mb-3" onChange={(e) => setPassword(e.target.value)} type='password' placeholder="" id="password" name="password"/>
                    <Button type="submit">Log In</Button>
                </form>
                <button className="link-btn border-0" onClick={handleChange}>Don't have an account? Register here.</button>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Login