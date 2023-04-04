import Navbar from 'react-bootstrap/Nav'
import '../assets/css/Homepage.css'

function NavBar() {
    return(
        <Navbar className="justify-content-center sticky-top">
            <Navbar.Item className="nav">
                <Navbar.Link className='text home' href='/'>Home</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item className="nav">
                <Navbar.Link className='text' href='/Bookings'>My Trips</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item className="nav">
                <Navbar.Link className='text' href='/Destinations'>Favorite Places</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item className="nav">
                <Navbar.Link className='text' href='/Random'>Random Getaway</Navbar.Link>
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
