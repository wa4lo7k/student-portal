import { useState } from 'react';
import { Link } from 'react-router-dom';
import { students } from '../data/students';

export function Students() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>Students</h2>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="list-group">
        {filteredStudents.map(student => (
          <Link
            key={student.id}
            to={`/students/${student.id}`}
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{student.name}</h5>
              <small>Grade: {student.grade}</small>
            </div>
            <p className="mb-1">{student.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 