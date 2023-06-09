import '../assets/css/Homepage.css'
import '../assets/css/Cards.css'
import NavBar from "../components/NavBar"
import SearchBar from '../components/SearchBar'
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'


function Homepage (){
    return(
        <div className='main'>
            <NavBar/>
            
            <div className="homeImgContainer">
                <img className="home-img" src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="travel"/>
                <SearchBar/>
            </div>
            <div className='grid justify-content-center'>
                <div className="grid">
                    <Card className="box boxes">
                        <Card.Img src='https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhbmRtYXJrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60' alt="london" className="card-img"/>
                        <Card.Body>
                            <Card.Text className="Title">Sightseeing</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="grid">
                    <Card className="box boxes">
                        <Card.Img src='https://images.unsplash.com/photo-1624128082323-beb6b8b508db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhbmlzaCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60' alt="empenadas" className="card-img card-img-2"/>
                        <Card.Body>
                            <Card.Text className="Title">Cultural staples & delicacies</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="grid">
                    <Card className="box boxes">
                        <Card.Img src='https://images.unsplash.com/photo-1662128400928-0e9a410caed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBhY3Rpdml0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="beach boy" className="card-img"/>
                        <Card.Body>
                            <Card.Text className="Title">Rest & relaxation</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                <div className="grid">
                        <Card className="box boxes">
                            <Card.Img src='https://plus.unsplash.com/premium_photo-1667512810276-60e3eeaefd06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJhemlsJTIwY2Fybml2YWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="friends" className="card-img"/>
                            <Card.Body>
                                <Card.Text className="Title">New friends</Card.Text>
                            </Card.Body>
                        </Card>
                </div>
                <div className="grid">
                        <Card className="box boxes">
                            <Card.Img src='https://images.unsplash.com/photo-1628690920311-a820459457ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFyYXNhaWxpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1030&q=60' alt="experiences" className="card-img"/>
                            <Card.Body>
                                <Card.Text className="Title">Experiences of a lifetime</Card.Text>
                            </Card.Body>
                        </Card>
                </div>
                <div className="grid">
                        <Card className="box boxes">
                            <Card.Img src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBhY2NvbW9kYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60' alt="hotel room" className="card-img"/>
                            <Card.Body>
                                <Card.Text className="Title">Affordable accommodations</Card.Text>
                            </Card.Body>
                        </Card>
                </div>
            </div>
            <div className="grid">
                <Button className="view-all" variant="dark" href="/Destinations">View our locations</Button>
            </div>
            
        </div>
    )
}

export default Homepage