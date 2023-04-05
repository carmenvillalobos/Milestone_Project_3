// import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './views/Home';
import Trips from './views/Trips';
import Destination from './views/Destination';
import DestinationIndex from './views/Destinations';
import Login from './views/Login';
import SignUp from './views/SignUp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName)
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Bookings' element={<Trips/>} />
          <Route path='/Destinations' element={<DestinationIndex/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Destination' element={<Destination/>} />
        </Routes>
      </Router>
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
      } */}
    </div>
  );
}

export default App;
