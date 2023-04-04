import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './views/Home';
import Trips from './views/Trips'
import FavPlaces from './views/FavPlaces';
import Random from './views/Random';
import Login from './views/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Bookings' element={<Trips/>} />
          <Route path='/Destinations' element={<FavPlaces/>} />
          <Route path='/Random' element={<Random/>} />
          {/* <Route path='/Login' element={<Login/>} /> */}
        </Routes>
      </Router>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Homepage onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
