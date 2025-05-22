import { useNavigate } from 'react-router-dom';

export function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body text-center">
          <h2 className="card-title text-danger">Unauthorized Access</h2>
          <p className="card-text">
            You don't have permission to access this page.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
} 