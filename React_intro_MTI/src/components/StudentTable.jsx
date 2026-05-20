import React, { useState, useEffect } from "react";
import "./StudentTable.css";

export default function StudentsTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const URL = "http://127.0.0.1:8000/api/students/";

  async function getStudents() {
    let data = await fetch(URL);
    let result = await data.json();
    setStudents(result);
  }

  return (
    <div className="table-container">
      <h2>Students Data</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Enrollment Date</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>

              <td>{student.student_name}</td>

              <td>{student.email}</td>

              <td>{student.course}</td>

              <td>{student.enrollment_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
