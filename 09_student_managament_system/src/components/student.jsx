import { useEffect, useState } from "react";
import { Table, Alert, Spinner } from "react-bootstrap";
import { getAllStudent } from "../api/StudentFetch";

const Student = () => {
    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getAllStudent();

            setStudent(data);
        } catch (err) {
            console.error("Student API Error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (loading) {
        return <Spinner animation="border" className="mt-4" />;
    }

    if (error) {
        return <Alert variant="danger" className="mt-4">{error}</Alert>;
    }

    return (
        <Table striped bordered hover className="mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>GR ID</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Phone Number</th>
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
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Student;