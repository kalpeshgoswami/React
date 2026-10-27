
import { createContext, useState } from "react";

export const expenseContext = createContext({
  expenseList: [],
  addExpense: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  editVal: null,
  setEditVal: () => {},
  debit: 0,
  credit: 0,
  balance: 0,
});

const initialValues = [
  {
    id: 1,
    title: "Dinner at Restaurant",
    description: "Dinner with friends at a local restaurant",
    amount: 1200,
    date: "2026-10-05",
    category: "Food",
    type: "debit",
  },
  {
    id: 2,
    title: "Freelance Project",
    description: "Payment received for website development",
    amount: 12000,
    date: "2026-10-04",
    category: "Freelance",
    type: "credit",
  },
];

const ExpenseContextProvider = ({ children }) => {
  const [expenseList, setExpenseList] = useState(initialValues);
  const [editVal, setEditVal] = useState(null);

  const addExpense = (input) => {
    if (!input) return;

    if (editVal) {
      setExpenseList((prev) =>
        prev.map((expense) =>
          expense.id === editVal.id
            ? {
                ...input,
                id: editVal.id,
                amount: Number(input.amount),
              }
            : expense,
        ),
      );

      setEditVal(null);
    } else {
      const newExpense = {
        ...input,
        id: Date.now(),
        amount: Number(input.amount),
      };

      setExpenseList((prev) => [...prev, newExpense]);
    }
  };

  const handleDelete = (id) => {
    setExpenseList((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleEdit = (id) => {
    const selectedExpense = expenseList.find((expense) => expense.id === id);

    setEditVal(selectedExpense || null);
  };

  const debit = expenseList
    .filter((expense) => expense.type === "debit")
    .reduce((total, expense) => total + Number(expense.amount), 0);

  const credit = expenseList
    .filter((expense) => expense.type === "credit")
    .reduce((total, expense) => total + Number(expense.amount), 0);

  const balance = credit - debit;

  const value = {
    expenseList,
    addExpense,
    handleDelete,
    handleEdit,
    setEditVal,
    editVal,
    debit,
    credit,
    balance,
  };

  return (
    <expenseContext.Provider value={value}>{children}</expenseContext.Provider>
  );
};

export default ExpenseContextProvider;
