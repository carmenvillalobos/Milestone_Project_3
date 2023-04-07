import { useEffect, useState } from "react";
import { useParams } from "react-router"
import '../assets/css/Destination.css'
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import NavBar from "../components/NavBar"

function Destination(props) {

    const { id } = useParams()

	const [destination, setDestination] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3001/destinations/${id}`)
			const resData = await response.json()
            console.log(resData)
			setDestination(resData)
		}
		fetchData()
	}, [id])

    function isAvailable(secured){
        if (secured === "True") {
            return ( 
                <p>This is available to book</p>
            )
        }
        else {
            return(
                <p>This is currently not available to book</p>
            )
        }
    }


    return(
        <div className='flex-box'>

            <div className="a">
                <NavBar/>
            </div>
            
            <div className="destination-cardb">
                <p className="name" style={{color: "black"}}>{destination.location}</p>
                <img className="destination-img" src={destination.image} alt={destination.location}/>
            </div>

            <div className="destination-descriptionc">
                <p className="description-txt" style={{color: "white", border: "2px solid", borderRadius: "5px"}}>Yes plz wolf bitters letterpress. Pok pok activated charcoal neutra poutine hammock mixtape. Tofu shaman freegan, austin dreamcatcher cardigan readymade franzen wolf bushwick. Gorpcore sustainable photo booth pinterest kinfolk skateboard ennui la croix cornhole lyft organic four dollar toast distillery fingerstache fanny pack. Chartreuse waistcoat keffiyeh you probably haven't heard of them salvia lo-fi marfa microdosing.</p> 
                {/* <p className="description-txt" style={{color: "white", border: "2px solid", borderRadius: "5px"}}>{destination.description}</p> */}
                <p style={{color: "white", border: "2px solid", borderRadius: "5px"}}>$362 /night</p>
                {/* <p style={{color: "white", border: "2px solid", borderRadius: "5px"}}>{destination.price}</p> */}
                <p style={{color: "white", border: "2px solid", borderRadius: "5px"}}>{isAvailable(`${destination.booking_secured}`)}</p>
                <Button className="reserve border col-sm-3" variant="dark" onClick={handleShow}>Reserve</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Woohoo!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Congrats and pack your bags! You're going to {destination.location}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose} href="/Bookings">See all reservations</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default Destination