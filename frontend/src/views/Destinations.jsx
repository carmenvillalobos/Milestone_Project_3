import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"
import "../assets/css/Trips.css"
import "../assets/css/Cards.css"

function DestinationIndex(props) {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3001/destinations`)
			const resData = await response.json()
			setDestinations(resData)
		}
		fetchData()
	}, [])

    let formattedDestinations = destinations.map((destination) => {
        return (
            <div className="grid" key={destination.id}>
                <Card className="box boxes">
                    <Card.Img src={destination.image} className="card-img"/>
                    <Card.Body>
                        <Card.Text className="Title">{destination.location}</Card.Text>
                        <Button className="book" variant="dark" href="/Destination">View More Info</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    return(
        <div className='main'>
            <NavBar/>
            <div>
                <img className="fav-img" src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="waterfront"/>
                <Card className="Trips border-0 mb-2">
                    <Card.Title><h1 style={{color: "white"}}>Destinations</h1></Card.Title>
                </Card>
            </div>
            <div className='grid'>
                {formattedDestinations}
            </div>
        </div>
    )
}

export default DestinationIndex