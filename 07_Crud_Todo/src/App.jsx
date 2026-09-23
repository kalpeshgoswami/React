import React from 'react'
import AddTodo from './components/AddTodo';

export const App = () => {

  const AllTodo = [
    {
      id: 1,
      task: "Learn",
      description: "You have to learn new things daily"
    },
    {
      id: 2,
      task: "Reading",
      description: "You have to read a book for 30 minutes every day"
    },
    {
      id: 3,
      task: "Playing",
      description: "You have to play cricket every day"
    },
  ];

  return (

    <>
      <AddTodo/>
    </>
    
  )
}
