import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Browse Movies
      </NavLink>

      <NavLink
        to="/watchlist"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        My Watchlist
      </NavLink>
    </nav>
  );
}

export default Navbar;