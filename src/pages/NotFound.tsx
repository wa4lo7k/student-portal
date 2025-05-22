import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body text-center">
          <h2 className="card-title">404 - Page Not Found</h2>
          <p className="card-text">
            The page you are looking for does not exist.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
} 