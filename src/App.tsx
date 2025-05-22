import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Students } from './pages/Students';
import { StudentDetail } from './pages/StudentDetail';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AdminPanel } from './pages/AdminPanel';
import { UserPanel } from './pages/UserPanel';
import { Unauthorized } from './pages/Unauthorized';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/:id" element={<StudentDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/admin" element={<AdminPanel />} />
              <Route path="/dashboard/user" element={<UserPanel />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
