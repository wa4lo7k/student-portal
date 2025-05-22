export interface Student {
  id: number;
  name: string;
  email: string;
  grade: string;
}

export const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    grade: "A"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    grade: "B+"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    grade: "A-"
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    grade: "B"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com",
    grade: "A+"
  }
]; 