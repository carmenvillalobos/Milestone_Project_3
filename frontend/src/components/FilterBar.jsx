import Navbar from 'react-bootstrap/Nav'

function FilterBar (props){
    return(
        <Navbar variant="tabs" className="justify-content-center bg-light">
            <Navbar.Item>
                <Navbar.Link href='/'>Amazing views</Navbar.Link> 
            </Navbar.Item>
        </Navbar>
    )
}

export default FilterBar