
import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      Task: "Learn",
      Description: "You have to learn new things daily",
    },
    {
      id: 2,
      Task: "Reading",
      Description: "You have to read a book for 30 minutes every day",
    },
    {
      id: 3,
      Task: "Playing",
      Description: "You have to play cricket every day",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [EditVal, setEditVal] = useState(null);

  const handleAdd = (input) => {
    if (!input.Task || !input.Description) {
      alert("Task data are required");
      return;
    }

    if (EditVal) {
      setTodos((todos) =>
        todos.map((t) =>
          t.id === EditVal.id
            ? {
                ...t,
                Task: input.Task,
                Description: input.Description,
              }
            : t
        )
      );

      setEditVal(null);
      alert("Task updated successfully");
    }

    else {
      const newTodo = {
        id: new Date().getTime(),
        Task: input.Task,
        Description: input.Description,
      };

      setTodos((pre) => [...pre, newTodo]);

      alert("Task added successfully");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    const todo = todos.find((t) => t.id === id);
    setEditVal(todo);
  };

  return (
    <>
      <AddTodo addTodo={handleAdd} EditVal={EditVal} />

      <ListTodo
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default App;