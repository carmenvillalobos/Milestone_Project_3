import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import NavBar from "../components/NavBar"
import "../assets/css/SignUp.css"
import { useState } from 'react';
import axios from 'axios'

function SignUp(props) {
    const [form, setForm] = useState({
        
    })
    return(
        <div>
            <NavBar/>
            <Card className="container">
            <div>
                <h1>Sign Up</h1>
            </div>
            {/* <div className="row">
                    <form onSubmit={onSubmit}>
                        <label for="firstname">Your First Name <span class="required-field">*</span></label>
                        <input type="text" id="firstname" name="firstname" required minlength="2" maxlength="35">
                        <label for="lastname">Your Last Name <span class="required-field">*</span></label>
                        <input type="text" id="lastname" name="lastname" required minlength="2" maxlength="35">
                
                    </form>
            </div> */}
            <div className="body col-sm-8">
                <div>
                    <label htmlFor="firstName"><b>First Name</b></label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="First Name"/>
                </div>
                <div>
                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Last Name"/>
                </div>
                <div>
                    <label htmlFor="email"><b>Email address</b></label>
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter Email"/>
                </div>
                <div>
                    <label htmlFor="username"><b>Username</b></label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter Username"/>
                </div>
                <div>
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Enter Password"/>
                </div>
            </div>
            <Button
                type="submit"
                className="submit-info col-sm-3 mb-3"
                href="/">
                Submit
            </Button>
            <Button
                type="button"
                className="back col-sm-3"
                href="/">
                Back
            </Button>
        </Card>
        </div>
        
    )
}

export default SignUp