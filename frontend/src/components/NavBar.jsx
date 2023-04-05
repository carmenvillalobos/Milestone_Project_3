import Navbar from 'react-bootstrap/Nav'
import '../assets/css/Homepage.css'

function NavBar() {
    return(
        <Navbar className="nav justify-content-space-between sticky-top">
            <Navbar.Item className="nav">
                <Navbar.Link className='text home' href='/'>Home</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item className="nav">
                <Navbar.Link className='text' href='/Bookings'>My Trips</Navbar.Link>
            </Navbar.Item>
            {/* <Navbar.Item className="nav">
                <Navbar.Link className='text' href='/Destinations'>Favorite Places</Navbar.Link>
            </Navbar.Item> */}
            <Navbar.Item className="nav">
                <Navbar.Link className='text' href='/Destinations'>All Destinations</Navbar.Link>
            </Navbar.Item>
            {/* Log-in */}
            <Navbar.Item className="nav">
                <Navbar.Link className='text personal' href='/Login'>Login</Navbar.Link>
            </Navbar.Item>
            {/* Sign-up */}
            <Navbar.Item className="nav">
                <Navbar.Link className='text personal' href='/SignUp'>Sign-up</Navbar.Link>
            </Navbar.Item>
        </Navbar>
    )
}

export default NavBar
