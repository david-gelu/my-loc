import logo from './logo.svg';
import './App.css';
import AddLocation from './components/pages/AddLocation'
import Home from './components/pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import './index.scss'

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/"> Home </Link>
        {window.location.pathname === '/add-location' ? <></> : <Link to='/add-location'> Add Location </Link>}
      </nav>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/add-location" element={<AddLocation />} />
      </Routes>
    </div>
  );
}

export default App;
