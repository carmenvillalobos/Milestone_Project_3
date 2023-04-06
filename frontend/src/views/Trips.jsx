import NavBar from "../components/NavBar"
import Card from "react-bootstrap/Card"
import Cards from '../components/Cards'
import '../assets/css/Trips.css'
import '../assets/css/Cards.css'

function Trips(props) {
    return(
        <div className='main'>
            <NavBar/>
            <div>
                <img className="fav-img" src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2luZyUyMHN1aXRjYXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1035&q=60" alt="travel"/>
                <Card className="Trips border-0 mb-2">
                    <Card.Title><h1 style={{color: "white", fontWeight: "500", fontSize: "30px", marginTop: "45px", padding: "auto"}}>My Trips</h1></Card.Title>
                </Card>
            </div>
            <div className='grid pop-cards justify-content-center'>
                
            </div>
        </div>
    )
}
// width: 18rem;
//     margin-top: 45px;
//     background-color: transparent;
export default Trips