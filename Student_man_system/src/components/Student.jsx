import { useEffect, useState } from "react";
import { Button, Table, Alert, Spinner, Container } from "react-bootstrap";
import { deleteStudent, getAllStudent } from "../API/StudentAxios";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAllStudent();

      console.log("Student API Data:", data);

      setStudent(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Student API Error:", err);
      setError(err.message || "Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    try {
      await deleteStudent(id);
      await loadData();
    } catch (err) {
      console.error("Delete Error:", err);
      setError(err.message || "Failed to delete student");
    }
  };

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" />
        <p>Loading students...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          {error}
          <div className="mt-2">
            <Button variant="outline-danger" onClick={loadData}>
              Try Again
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="mt-4">
      <h2 className="mb-3">Student List</h2>

      {student.length === 0 ? (
        <Alert variant="info">
          No students found. Click Add Student to create a record.
        </Alert>
      ) : (
        <Table border={2}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>GR ID</th>
              <th>Email</th>
              <th>Course</th>
              <th>Phone Number</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {student.map((S, index) => (
              <tr key={S._id || index}>
                <td>{index + 1}</td>
                <td>{S.name}</td>
                <td>{S.GRid}</td>
                <td>{S.email}</td>
                <td>{S.course}</td>
                <td>{S.PhoneNumber}</td>
                <td>
                  <Button
                    className="delete-btn"
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(S._id)}
                    disabled={!S._id}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    className="update-btn"
                    variant="danger"
                    size="sm"
                    onClick={() => navigate(`/update/${S._id}`)}
                    disabled={!S._id}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Student;
