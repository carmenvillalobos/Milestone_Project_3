import NavBar from "../components/NavBar"
import Cards from "../components/Cards"
import Card from "react-bootstrap/Card"
import '../assets/css/Trips.css'

function Trips(props) {
    return(
        <div className='main'>
            <NavBar/>
            <div>
                <img className="fav-img" src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="travel"/>
                <Card className="Trips border-0 mb-2">
                    <Card.Title><h1 style={{color: "white"}}>My Trips</h1></Card.Title>
                </Card>
            </div>
            <div className='grid justify-content-center'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    )
}

export default Trips