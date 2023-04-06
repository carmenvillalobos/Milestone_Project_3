import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import '../assets/css/SearchBar.css'
import { useNavigate, Link} from 'react-router-dom';

function SearchBar() {
    const navigate = useNavigate();
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:3001/destinations`)
              const resData = await response.json()
              console.log(resData)
        setDestinations(resData)
      }
      fetchData()
    }, [])


    function handleChange(event) {
      event.preventDefault();
      setDestinations(event.target.value);
      navigate(`/Destination/${event.target.value}`);
    }
      

    return (
        <div>
        <Card className="Search border-0">
            <Card.Body>
                <div>
                  <label className="label">
                  <div className="day">
                    <p className='title'>
                      Destinations
                    </p>
                  </div>
                  <select 
                    onChange={handleChange}
                    className="round" 
                    name="day">
                      <option disabled selected value>  Select A Destination  </option>
                      {destinations.map(destination => (
          <option key={destination.id} value={destination.id}>{destination.location}</option>
        ))}
                  </select>
                </label>
              </div>
              {/* <Link to={`/${destinations.id}`} className="paradise" variant="primary" onClick={handleChange}>Take me to paradise</Link> */}
            </Card.Body>
            </Card>
            </div>
      
    );
  }

export default SearchBar

