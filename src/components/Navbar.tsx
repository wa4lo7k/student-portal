import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Student Portal</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/students">Students</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {isAuthenticated ? (
              <button className="btn btn-outline-light" onClick={logout}>
                Logout
              </button>
            ) : (
              <NavLink className="btn btn-outline-light" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 