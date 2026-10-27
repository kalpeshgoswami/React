import { useContext } from "react";
import { expenseContext } from "./context/ExpenseContext";
import Add from "./components/Add";
import ExpenseList from "./components/ExpenseLIst";
import ExpenseStats from "./components/ExpenseState"

const App = () => {
  const { expenseList, addExpense } = useContext(expenseContext);

  console.log("expenseList", expenseList);

  const handleAdd = (input) => {
    addExpense(input);
  };

  return (
    <>
      <h2>Expense List</h2>

      <Add handleAdd={handleAdd} />

      <ExpenseStats />

      <ExpenseList expenseList={expenseList} />
    </>
  );
};

export default App;
