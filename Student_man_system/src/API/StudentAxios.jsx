import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllStudent() {
  try {
    const res = await axios.get(`${BASE_URL}/getAllStudents`);

    console.log("FULL GET RESPONSE:", res.data);

    return res.data.AllStudentsData;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addStudent(studentData) {
  try {
    const res = await axios.post(`${BASE_URL}/add`, studentData);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteStudent(id) {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);

    if (res.status !== 200) {
      throw new Error("Failed to delete Employee data");
    }

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function UpdateStudent(id, StudentData) {
  try {
    const res = await axios.patch(`${BASE_URL}/${id}`, StudentData);

    if (res.status !== 200) {
      throw new Error("Failed to update Student data");
    }

    return res.data.studentData;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getStudentById(id) {
  try {
    const res = await axios.get(`${BASE_URL}/${id}`);

    return res.data.studentData;
  } catch (error) {
    throw new Error(error.message);
  }
};
