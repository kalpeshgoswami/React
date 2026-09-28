
import React, { useEffect, useState } from "react";

const AddTodo = ({ addTodo, EditVal }) => {
  const [input, setInput] = useState({
    Task: "",
    Description: "",
  });

  useEffect(() => {
    if (EditVal) {
    }
  }, [EditVal]);

  const handleChange = (field, e) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(input);

    setInput({
      Task: "",
      Description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your Task"
        value={input.Task}
        onChange={(e) => handleChange("Task", e)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your Description"
        value={input.Description}
        onChange={(e) => handleChange("Description", e)}
      />

      <br />
      <br />

      <button type="submit">
        {EditVal ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default AddTodo;