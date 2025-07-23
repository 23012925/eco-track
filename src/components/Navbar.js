import { Link } from 'react-router-dom';
import './Navbar.css'; // (We'll create this next)

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">EcoTrack</h1>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/log">Log Activity</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/tips">Eco Tips</Link></li>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
