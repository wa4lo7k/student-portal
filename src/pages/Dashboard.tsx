import { Navigate, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Dashboard() {
  const { role, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Dashboard</h2>
          <p className="card-text">
            Welcome to your dashboard, {role}!
          </p>
          <div className="list-group">
            <NavLink to="/dashboard/user" className="list-group-item list-group-item-action">
              User Panel
            </NavLink>
            {role === 'admin' && (
              <NavLink to="/dashboard/admin" className="list-group-item list-group-item-action">
                Admin Panel
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 