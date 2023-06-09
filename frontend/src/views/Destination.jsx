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

    return(
        <div>

            <div className="a">
                <NavBar/>
            </div>
            <div className="flex-box row">

                <div className="destination-cardb">
                    <div className="center">
                        {/* <p className="name" style={{color: "black"}}>Machu Picchu, Peru</p> */}
                        {/* <img className="destination-img" src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaHUlMjBwaWNjaHV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt={destination.location}/> */}
                        <p className="name" style={{color: "black"}}>{destination.location}</p>
                        <img className="destination-img" src={destination.image} alt={destination.location}/>
                    </div>
                </div>

                <div className="destination-descriptionc">
                    <div className="center">
                        <p className="description-txt" style={{color: "white", border: "2px solid", borderRadius: "5px"}}>{destination.description}</p>
                        {/* <p className="description-txt" style={{color: "white", border: "2px solid", borderRadius: "5px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, */}
                            {/* molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? </p> */}
                        <p className="price" style={{color: "white", border: "2px solid", borderRadius: "5px"}}>${destination.price} / night</p>
                        <Button className="reserve border col-sm-5" variant="dark" onClick={handleShow}>Reserve</Button>
                    </div>
                </div>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Congrats!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Pack your bags, because you're going to {destination.location}! Woohoo!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose} href="/Bookings">See all reservations</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default Destination