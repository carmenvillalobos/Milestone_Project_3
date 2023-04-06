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
            console.log(resData)
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
                        <Button className="book" variant="dark" href={`/Destination/${destination.id}`}>View More Info</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    return(
        <div className='main'>
            <NavBar/>
            <div>
                <img className="fav-img" src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1035&q=60" alt="waterfront"/>
                <Card className="Trips border-0 mb-2">
                    <Card.Title><h1 style={{color: "white", fontWeight: "500", fontSize: "30px", marginTop: "20px", padding: "auto"}}>Destinations</h1></Card.Title>
                </Card>
            </div>
            <div className='grid'>
                {formattedDestinations}
            </div>
        </div>
    )
}

export default DestinationIndex