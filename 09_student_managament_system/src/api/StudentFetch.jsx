const BASE_URL = import.meta.env.VITE_BASE_URL;

// console.log("BASE URL:", BASE_URL);

export async function getAllStudent() {
  try {
    const res = await fetch(`${BASE_URL}/student/getAllStudents`);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();

    // console.log("API data:", data);

    console.log("FULL API RESPONSE:", data);

    return data.AllStudentsData;
  } catch (error) {
    throw new Error(error.message)
  }
};
export const addStudent = async (studentData) => {
    try {
        console.log("SENDING DATA:", studentData);

        const res = await fetch(`${BASE_URL}/student/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData),
        });

        const data = await res.json();

        console.log("ADD STUDENT STATUS:", res.status);
        console.log("ADD STUDENT RESPONSE:", data);

        if (!res.ok) {
            throw new Error(data.message || `API Error: ${res.status}`);
        }

        return data;

    } catch (error) {
        console.error("addStudent Error:", error);
        throw error;
    }
};

export async function deleteStudent(id){
  try {
    const res= await fetch(`${BASE_URL}/${id}`,{
      method:"DELETE",
    })

    const data = await res.json();

    if(!res.ok){
      console.log("Backend error:",data);
      throw new Error(data.message ||"Failed to delete Student");
    }

    console.log("Backend error:",data);

    return data;

  } catch (error) {
    console.error("Delete API Error:",error)
    throw error
  }
}