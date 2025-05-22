import { useParams, useNavigate } from 'react-router-dom';
import { students } from '../data/students';

export function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find(s => s.id === Number(id));

  if (!student) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Student not found
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/students')}
        >
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{student.name}</h2>
          <div className="card-text">
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/students')}
          >
            Back to Students
          </button>
        </div>
      </div>
    </div>
  );
} 