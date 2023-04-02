import Navbar from 'react-bootstrap/Nav'
import '../assets/css/Homepage.css'

function NavBar() {
    // let nav  = document.querySelector('Navbar')

    // window.addEventListener('scroll', function(){
    //     if(this.window.pageYOffset > 100){
    //         nav.className.add('bg-dark', 'shadow');
    //     }else{
    //         nav.className.remove('bg-dark', 'shadow')
    //     }
    // })
    return(
        <Navbar className="justify-content-center sticky-top">
            <Navbar.Item>
                <Navbar.Link className='text home' href='/'>Home</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
                <Navbar.Link className='text' href='/Bookings'>My Trips</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
                <Navbar.Link className='text' href='/Destinations'>Favorite Places</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
                <Navbar.Link className='text' href='/Random'>Random Getaway</Navbar.Link>
            </Navbar.Item>
            {/* Log-in */}
            <Navbar.Item>
                <Navbar.Link className='text personal' href='/Log-in'>Log-in</Navbar.Link>
            </Navbar.Item>
            {/* Sign-up */}
            <Navbar.Item>
                <Navbar.Link className='text personal' href='/Sign-Up'>Sign-up</Navbar.Link>
            </Navbar.Item>
        </Navbar>
    )
}

export default NavBar
