# Student Portal & Role-Based Dashboard

A React application that implements a multi-page student portal and a role-based dashboard with protected routes.

## Features

### 1. Student Portal
- **Home Page** (`/`)
  - Welcome message
  - Navigation bar
- **Students Page** (`/students`)
  - List of students
  - Search functionality
  - Links to student details
- **Student Detail Page** (`/students/:id`)
  - Student information (name, email, grade)
  - Back to students list
- **About Page** (`/about`)
  - Project information
  - Features list
- **404 Page**
  - Handles undefined routes
- **Navigation**
  - Responsive navbar
  - Active link highlighting

### 2. Role-Based Dashboard
- **Login Page** (`/login`)
  - Role selection (Admin/User)
  - Loading spinner
  - Form validation
- **Dashboard** (`/dashboard`)
  - Protected route
  - Role-based content
  - Navigation menu
- **Admin Panel** (`/dashboard/admin`)
  - Admin-only access
  - System statistics
  - Management tools
- **User Panel** (`/dashboard/user`)
  - User-specific content
  - Profile information
  - User actions
- **Unauthorized Page**
  - Handles unauthorized access attempts
- **Logout Functionality**
  - Clears authentication state
  - Redirects to login

## Technologies Used
- React
- TypeScript
- React Router v6
- Bootstrap 5
- Vite

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/wa4lo7k/student-portal.git
cd student-portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Usage

### Student Portal
1. Navigate through the portal using the navigation bar
2. View the list of students
3. Search for specific students
4. Click on a student to view their details

### Role-Based Dashboard
1. Click "Login" in the navigation bar
2. Select your role (Admin/User)
3. Access the dashboard
4. Navigate to role-specific panels
5. Use the logout button when done

## Project Structure
```
src/
├── components/     # Reusable components
├── contexts/       # React contexts
├── pages/         # Page components
├── data/          # Mock data
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Due Date
April 18th, 2025

## Author
wa4lo7k

## License
This project is licensed under the MIT License.

## GitHub Repository
[View on GitHub](https://github.com/wa4lo7k/student-portal.git)
