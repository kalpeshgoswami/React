import { useContext } from "react";
import { expenseContext } from "./context/ExpenseContext";
import Add from "./components/Add";
import ExpenseList from "./components/ExpenseList";
import ExpenseStats from "./components/ExpenseStats";
import Example from "./concept/CounterUseReducer";

const App = () => {
  const { expenseList, addExpense } = useContext(expenseContext);

  console.log("expenseList", expenseList);

  const handleAdd = (input) => {
    addExpense(input);
  };

  return (
    <>
      <Add handleAdd={handleAdd} />

      <ExpenseStats />

      <ExpenseList expenseList={expenseList} />

      {/* <Example /> */}
    </>
  );
};

export default App;
