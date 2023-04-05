import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../assets/css/SearchBar.css'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");

  
      const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

      function handleClick() {
        navigate('/destination/:id');
      }
      

    return (
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
                  {/* <option value="location">{destination.location}</option> */}
              </select>
            </label>
          </div>
          <Button className="paradise" variant="primary" onClick={handleClick}>Take me to paradise</Button>
        </Card.Body>
      </Card>
    );
  }

export default SearchBar

