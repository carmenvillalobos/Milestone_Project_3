import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import NavBar from "../components/NavBar"
import "../assets/css/SignUp.css"
import { useState } from 'react';
// import axios from 'axios'

function SignUp(props) {
    const [signUp, setSignUp] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signUp)
    }
    return(
        <div className="background">
            <NavBar/>
            <Card className="container">
            <div>
                <h1>Sign Up</h1>
            </div>
            <form className="signup-form col-sm-8" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName"><b>First Name</b></label>
                    <input
                        type="text"
                        id="firstName"
                        required
                        className="form-control mb-3"
                        placeholder="First Name"/>
                </div>
                <div>
                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input
                        type="text"
                        id="lastName"
                        required
                        className="form-control mb-3"
                        placeholder="Last Name"/>
                </div>
                <div>
                    <label htmlFor="email"><b>Email address</b></label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="form-control mb-3"
                        placeholder="Enter Email"/>
                </div>
                <div>
                    <label htmlFor="username"><b>Username</b></label>
                    <input
                        type="text"
                        id="username"
                        required
                        className="form-control mb-3"
                        placeholder="Enter Username"/>
                </div>
                <div>
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        id="password"
                        required
                        className="form-control mb-3"
                        placeholder="Enter Password"/>
                </div>
                <div className="buttons">
                <Button
                    type="button"
                    className="back-btn col-sm-3"
                    href="/">
                    Home
                </Button>
                <Button
                    type="submit"
                    className="submit-info col-sm-3"
                    href="/Login">
                    Submit
                </Button>
            </div>
            </form>
            
            <button className="link-btn" href="/Login">Already have an account? Log in here.</button>
        </Card>
        </div>
    )
}

export default SignUp