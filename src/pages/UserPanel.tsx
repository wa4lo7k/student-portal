import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function UserPanel() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">User Panel</h2>
          <p className="card-text">
            Welcome to your user dashboard. Here you can view your information and settings.
          </p>
          <div className="list-group">
            <div className="list-group-item">
              <h5>Your Profile</h5>
              <p>Email: user@example.com</p>
              <p>Last Login: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="list-group-item">
              <h5>Quick Actions</h5>
              <button className="btn btn-primary me-2">Edit Profile</button>
              <button className="btn btn-secondary">View History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 