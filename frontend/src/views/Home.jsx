import '../assets/css/Homepage.css'
import '../assets/css/Cards.css'
import NavBar from "../components/NavBar"
import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'

function Homepage (props){
    return(
        <div className='main'>
            <NavBar/>
            <div>
                <img className="home-img" src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="travel"/>
                <SearchBar/>
            </div>
            <div className='grid'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    )
}

export default Homepage