import React, { useState } from 'react'
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

const App = () => {

  const initialTodos = [
    {
      id: 1,
      Task: "Learn",
      Description: "You have to learn new things daily"
    },
    {
      id: 2,
      Task: "Reading",
      Description: "You have to read a book for 30 minutes every day"
    },
    {
      id: 3,
      Task: "Playing",
      Description: "You have to play cricket every day"
    },
  ];


  const handleAdd= (input) => {

    const newTodo = {
      id: new Date().getTime(),
      Task: input.Task,
      Description: input.Description,
    };
    setTodos((pre) => [...pre, newTodo])
  }

  const [todos, setTodos] = useState(initialTodos);

  return (

    <>
      <AddTodo handleAdd={handleAdd} />
      <ListTodo todos={todos} />
    </>

  )
}

export default App
