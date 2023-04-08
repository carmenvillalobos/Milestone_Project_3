import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import NavBar from "../components/NavBar"
import "../assets/css/SignUp.css"
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleChange() {
        let path = `/login`
        navigate(path);
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { email, username, password };
        try {
            const response = await axios.post('http://localhost:3001/users/signup', data);
            console.log(response.data);
            // handle successful signup
        } catch (error) {
            console.error(error);
            // handle signup error
        }
    };

    return(
        <div className="background">
            <NavBar/>
            <Card className="container">
            <div>
                <h1>Sign Up</h1>
            </div>
            <form className="signup-form col-sm-8" onSubmit={handleSubmit}>
                {/* <div>
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
                </div> */}
                <div>
                    <label htmlFor="email"><b>Email address</b></label>
                    <input
                        type="email"
                        id="email"
                        required
                        onChange={(e) => {setEmail(e.target.value)}}
                        className="form-control mb-3"
                        placeholder="Enter Email"/>
                </div>
                <div>
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" id="username" required onChange={(e)=>{setUsername(e.target.value)}} className="form-control mb-3" placeholder="Enter Username"/>
                </div>
                <div>
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        id="password"
                        required
                        onChange={(e) => {setPassword(e.target.value)}}
                        className="form-control mb-3"
                        placeholder="Enter Password"/>
                </div>
                <div className="buttons">
                <Button
                    type="submit"
                    className="submit-info col-sm-3">
                    Submit
                </Button>
            </div>
            </form>
            
            <button className="link-btn" onClick={handleChange}>Already have an account? Log in here.</button>
        </Card>
        </div>
    )
}

export default SignUp