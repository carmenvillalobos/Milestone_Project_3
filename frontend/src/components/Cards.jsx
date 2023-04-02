import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"
import '../assets/css/Cards.css'

function Cards() {
    return(
        <div className="grid">
            <Card className="box boxes">
                <Card.Img src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' className="card-img"/>
                <Card.Body>
                    <Card.Text className="Title">Yosemite, California</Card.Text>
                    <Button className="book" variant="dark">Book Trip</Button>
                    <Button className="favorite" variant="dark">Add to Favorites</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards

// style={{width: '10rem', height: '100px'}}