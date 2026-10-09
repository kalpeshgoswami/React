import { useEffect, useState } from "react";
import { Button, Table, Alert, Spinner } from "react-bootstrap";
import { deleteStudent, getAllStudent } from "../api/StudentFetch";

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

    const handleDelete = async (id) => {
        try {

            await deleteStudent(id);
            await loadData()

        } catch (error) {
            console.log("Delete Error:", error);
            setError(error.message)
        }
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
                    <th colSpan={2} >Actions</th>
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
                        <td><Button variant="warning" >Edit</Button></td>
                        <td><Button
                            variant="danger"
                            onClick={() => handleDelete(S._id)}
                        >Delete</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Student;