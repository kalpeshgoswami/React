
import React, { useContext, useEffect, useState } from "react";
import { expenseContext } from "../context/ExpenseContext";

const initialForm = {
  title: "",
  description: "",
  amount: "",
  date: "",
  category: "",
  type: "",
};

const Add = () => {
  const { addExpense, editVal } = useContext(expenseContext);
  const [input, setInput] = useState(initialForm);

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const handleChange = (field, e) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({
      ...input,
      amount: Number(input.amount),
    });

    setInput(initialForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />

        <input
          type="text"
          placeholder="Enter title"
          value={input.title}
          onChange={(e) => handleChange("title", e)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Description"
          value={input.description}
          onChange={(e) => handleChange("description", e)}
        />

        <br />
        <br />

        <input
          type="Number"
          placeholder="Enter Amount"
          value={input.amount}
          onChange={(e) => handleChange("amount", e)}
        />

        <br />
        <br />

        <input
          type="date"
          placeholder="Enter date"
          value={input.date}
          onChange={(e) => handleChange("date", e)}
        />

        <br />
        <br />

        <select
          value={input.category}
          onChange={(e) => handleChange("category", e)}
        >
          <option value="">Select</option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>

        <br />
        <br />

        <select value={input.type} onChange={(e) => handleChange("type", e)}>
          <option value="select">Select type</option>
          <option value="debit">debit</option>
          <option value="credit">credit</option>
        </select>

        <br />
        <br />

        <button type="submit">Add</button>

        <br />
        <br />
      </form>
    </>
  );
};

export default Add;
