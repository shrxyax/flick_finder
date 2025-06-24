import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // create this for styling

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="navbar-logo">
    <Link to="/">Flick<span>Finder</span></Link>
  </div>

  <div className="navbar-right">
    <ul className="navbar-links">
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="/tvshows">Tv Show</NavLink></li>
      <li><NavLink to="/movies">Movie</NavLink></li>
      <li><NavLink to="/upcoming">Upcoming</NavLink></li>
    </ul>
    <button className="favorite-btn">Favorite</button>
  </div>
</nav>

  );
};

export default Navbar;
