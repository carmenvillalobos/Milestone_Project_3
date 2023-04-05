import { useEffect, useState } from "react"
import { useParams } from "react-router"
import '../assets/css/Destination.css'
import Button from "react-bootstrap/Button"
import NavBar from "../components/NavBar"

function Destination(props) {
    return(
        <div className='flex-box'>

            <div className="a">
                <NavBar/>
            </div>
            
            <div className="destination-cardb">
                <p className="name" style={{color: "black"}}>Venice, Italy</p>
                {/* {destination.name} */}
                <img className="destination-img" src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVuaWNlJTIwaXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="venice, italy"/>
                {/* {destination.image} */}
            </div>

            <div className="destination-descriptionc">
                <p className="description-txt" style={{color: "white", border: "2px solid", borderRadius: "5px"}}>Yes plz wolf bitters letterpress. Pok pok activated charcoal neutra poutine hammock mixtape. Tofu shaman freegan, austin dreamcatcher cardigan readymade franzen wolf bushwick. Gorpcore sustainable photo booth pinterest kinfolk skateboard ennui la croix cornhole lyft organic four dollar toast distillery fingerstache fanny pack. Chartreuse waistcoat keffiyeh you probably haven't heard of them salvia lo-fi marfa microdosing.</p> 
                {/* {destination.description} */}
                <p style={{color: "white", border: "2px solid", borderRadius: "5px"}}>$362 /night</p>
                {/* ${destination.price} /night */}
                <p style={{color: "white", border: "2px solid", borderRadius: "5px"}}>Available</p>
                {/* {destination.availability} */}
                <Button className="reserve border col-sm-3" variant="dark" href="/Success">Reserve</Button>
            </div>
            
        </div>
    )
}

export default Destination