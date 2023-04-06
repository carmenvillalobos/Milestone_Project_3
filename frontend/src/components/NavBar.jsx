import Navbar from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import '../assets/css/Homepage.css'

function NavBar() {
    return(
        <Navbar className="justify-content-space-between sticky-top">
            <div className="nav logo">
                <Navbar.Item><Image src="https://image.similarpng.com/very-thumbnail/2021/08/Illustration-of-Travel-agency-logo-design-template-on-transparent-background-PNG.png" alt="logo" width="50" height="50" roundedCircle/></Navbar.Item>
            </div>
            <div className="nav home">
                <Navbar.Item>
                    <Navbar.Link className='text' href='/'>Home</Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Navbar.Link className='text' href='/Bookings'>My Trips</Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Navbar.Link className='text' href='/Destinations'>All Destinations</Navbar.Link>
                </Navbar.Item>
            </div>
            <div className="nav personal">
                <Navbar.Item>
                    <Navbar.Link className='text' href='/Login'>Login</Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Navbar.Link className='text' href='/SignUp'>Sign-up</Navbar.Link>
                </Navbar.Item>
            </div>
        </Navbar>
    )
}

export default NavBar
