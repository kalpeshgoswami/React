import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { addStudent, UpdateStudent, getStudentById } from "../API/StudentAxios";

function AddStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    GRid: "",
    email: "",
    course: "",
    PhoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchStudent = async () => {
      try {
        setLoading(true);

        const data = await getStudentById(id);

        if (!data) {
          throw new Error("Student data not found");
        }

        setFormData({
          name: data.name ?? "",
          GRid: String(data.GRid ?? ""),
          email: data.email ?? "",
          course: data.course ?? "",
          PhoneNumber: String(data.PhoneNumber ?? ""),
        });
      } catch (error) {
        console.error("Fetch Student Error:", error);
        alert(
          error.response?.data?.message ||
            error.message ||
            "Failed to load student",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setSubmitting(true);

      const studentData = {
        name: formData.name.trim(),
        GRid: String(formData.GRid).trim(),
        email: formData.email.trim(),
        course: formData.course.trim(),
        PhoneNumber: String(formData.PhoneNumber).trim(),
      };

      if (id) {
        await UpdateStudent(id, studentData);
        alert("Student updated successfully!");
      } else {
        await addStudent(studentData);
        alert("Student added successfully!");
      }

      navigate("/");
    } catch (error) {
      console.error("Student Submit Error:", error);
      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to save student",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p>Loading student data...</p>;
  }

  return (
    <div>
      <h2>{id ? "Update Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter Student Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="GRid">GR ID</label>
          <input
            id="GRid"
            type="text"
            name="GRid"
            placeholder="Enter GR ID"
            value={formData.GRid}
            onChange={handleChange}
          />
          {errors.GRid && <p>{errors.GRid}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="course">Course</label>
          <input
            id="course"
            type="text"
            name="course"
            placeholder="Enter Course"
            value={formData.course}
            onChange={handleChange}
          />
          {errors.course && <p>{errors.course}</p>}
        </div>

        <div>
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input
            id="PhoneNumber"
            type="tel"
            name="PhoneNumber"
            placeholder="Enter Phone Number"
            value={formData.PhoneNumber}
            onChange={handleChange}
          />
          {errors.PhoneNumber && <p>{errors.PhoneNumber}</p>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Saving..." : id ? "Update Student" : "Add Student"}
        </button>

        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
