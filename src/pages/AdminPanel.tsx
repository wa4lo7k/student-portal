import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function AdminPanel() {
  const { role, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role !== 'admin') {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Admin Panel</h2>
          <p className="card-text">
            Welcome to the admin panel. Here you can manage the system.
          </p>
          <div className="list-group">
            <div className="list-group-item">
              <h5>System Statistics</h5>
              <p>Total Students: 5</p>
              <p>Active Users: 2</p>
            </div>
            <div className="list-group-item">
              <h5>Quick Actions</h5>
              <button className="btn btn-primary me-2">Manage Users</button>
              <button className="btn btn-secondary">View Logs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 