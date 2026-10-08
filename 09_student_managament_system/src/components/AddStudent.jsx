import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";

import { addStudent } from "../api/StudentFetch";
import validationSchema from "../validation/validation";

function AddStudent() {
    const { Formik } = formik;

    return (
        <div className="student-form-container mt-5">
            <h2 className="student-form-title mb-4">
                Add Student
            </h2>

            <Formik
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        await addStudent(values);
                        resetForm();
                    } catch (error) {
                        console.error("Error adding student:", error);
                    }
                }}
                initialValues={{
                    name: "",
                    GRid: "",
                    email: "",
                    course: "",
                    PhoneNumber: "",
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                }) => (
                    <Form
                        noValidate
                        onSubmit={handleSubmit}
                        className="student-form"
                    >
                        <Row className="student-form-row mb-3">

                            <Form.Group
                                as={Col}
                                md="6"
                                className="student-form-group"
                            >
                                <Form.Label>
                                    Student Name
                                </Form.Label>

                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter student name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isInvalid={
                                        touched.name && !!errors.name
                                    }
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group
                                as={Col}
                                md="6"
                                className="student-form-group"
                            >
                                <Form.Label>
                                    GR ID
                                </Form.Label>

                                <Form.Control
                                    type="text"
                                    name="GRid"
                                    placeholder="Enter GR ID"
                                    value={values.GRid}
                                    onChange={handleChange}
                                    isInvalid={
                                        touched.GRid && !!errors.GRid
                                    }
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.GRid}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>


                        <Row className="student-form-row mb-3">

                            <Form.Group
                                as={Col}
                                md="6"
                                className="student-form-group"
                            >
                                <Form.Label>
                                    Email
                                </Form.Label>

                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={
                                        touched.email && !!errors.email
                                    }
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group
                                as={Col}
                                md="6"
                                className="student-form-group"
                            >
                                <Form.Label>
                                    Course
                                </Form.Label>

                                <Form.Control
                                    type="text"
                                    name="course"
                                    placeholder="Enter course"
                                    value={values.course}
                                    onChange={handleChange}
                                    isInvalid={
                                        touched.course && !!errors.course
                                    }
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.course}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className="student-form-row mb-4">

                            <Form.Group
                                as={Col}
                                md="6"
                                className="student-form-group"
                            >
                                <Form.Label>
                                    Phone Number
                                </Form.Label>

                                <Form.Control
                                    type="tel"
                                    name="PhoneNumber"
                                    placeholder="Enter phone number"
                                    value={values.PhoneNumber}
                                    onChange={handleChange}
                                    isInvalid={
                                        touched.PhoneNumber &&
                                        !!errors.PhoneNumber
                                    }
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.PhoneNumber}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>


                        <Button
                            type="submit"
                            className="student-submit-btn"
                        >
                            Add Student
                        </Button>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddStudent;