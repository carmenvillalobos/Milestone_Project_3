import NavBar from "../components/NavBar"
import Cards from "../components/Cards"

function Random(props) {
    return(
        <div className='main'>
            <NavBar/>
            <h2 style={{textAlign: "center"}}>Book it today!</h2>
            <div className='grid justify-content-center'>
                <Cards/>
            </div>
        </div>
    )
}

export default Random