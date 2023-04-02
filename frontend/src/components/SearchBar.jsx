import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../assets/css/SearchBar.css'

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const destinations = [
        { city: "Belgium", country: "Europe" },
        { city: "India", country: "Asia" },
        { city: "Bolivia", country: "South America" },
        { city: "Ghana", country: "Africa" },
        { city: "Japan", country: "Asia" },
        { city: "Canada", country: "North America" },
        { city: "New Zealand", country: "Australasia" },
        { city: "Italy", country: "Europe" },
        { city: "South Africa", country: "Africa" },
        { city: "China", country: "Asia" },
        { city: "Paraguay", country: "South America" },
        { city: "Usa", country: "North America" },
        { city: "France", country: "Europe" },
        { city: "Botswana", country: "Africa" },
        { city: "Spain", country: "Europe" },
        { city: "Senegal", country: "Africa" },
        { city: "Brazil", country: "South America" },
        { city: "Denmark", country: "Europe" },
        { city: "Mexico", country: "South America" },
        { city: "Australia", country: "Australasia" },
        { city: "Tanzania", country: "Africa" },
        { city: "Bangladesh", country: "Asia" },
        { city: "Portugal", country: "Europe" },
        { city: "Pakistan", country: "Asia"},
      ];
      const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          destinations.filter((destination) => {
          return destination.city.match(searchInput);
      });
      }

    return (
      <Card className="Search border-0">
        <Card.Body>
            <div>
            <label>
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
                <option value="Mexico">Cancún, Mexico</option>
                <option value="Italy">Venice, Italy</option>
                <option value="Bahamas">Harbour Island, Bahamas</option>
                <option value="Philippines">Manila, Philippines</option>
                <option value="Brazil">Rio de Janeiro, Brazil</option>
                <option value="Peru">Machu Picchu, Peru</option>
                <option value="Australia">Sydney, Australia</option>
            </select>
          </label>
                {/* <input
                    type="text"
                    placeholder="Search Destinations"
                    onChange={handleChange}
                    value={searchInput}/> */}
                {/* <table>
                    <tbody>
                        <tr>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                        {destinations.map((destination, index) => {
                            <div>
                                <tr>
                                    <td>{destinations.city}</td>
                                    <td>{destinations.country}</td>
                                </tr>
                            </div>
                        })}
                    </tbody>
                </table> */}
            </div>
          <Button className="paradise" variant="primary">Take me to paradise</Button>
        </Card.Body>
      </Card>
    );
  }

export default SearchBar

