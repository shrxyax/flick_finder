// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<div>TV Shows Page</div>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/upcoming" element={<div>Upcoming Page</div>} />
      </Routes>
    </div>
  );
};

export default App;

