import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './views/Home';
import Trips from './views/Trips'
import FavPlaces from './views/FavPlaces';
import Random from './views/Random';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Bookings' element={<Trips/>} />
          <Route path='/Destinations' element={<FavPlaces/>} />
          <Route path='/Random' element={<Random/>} />
          <Route path='/Sign-Up' element={<Trips/>} />
          <Route path='/Log-In' element={<Trips/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
