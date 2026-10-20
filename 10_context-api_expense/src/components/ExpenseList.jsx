// import React, { useContext, useState } from "react";
// import { expenseContext } from "../context/ExpenseContext";

// const ExpenseList = () => {
//   const { expenseList, handleDelete, handleEdit } = useContext(expenseContext);

//   const [expenseQuery, setExpenseQuery] = useState({
//     title: "",
//     type: "all",
//     category: "all",
//     sort: "",
//   });

//   const handleChange = (field, e) => {
//     setExpenseQuery((prev) => {
//       return {
//         ...prev,
//         [field]: e.target.value,
//       };
//     });
//   };

//   const filterList = expenseList.filter((l) =>
//     l.title?.toLoverCase().includes(expenseQuery.title.toLowerCase()),
//   );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Search</label>
//         <input
//           type="text"
//           placeholder="Enter Title"
//           value={expenseContext.title}
//           onChange={(e) => handleChange("title", e)}
//         />

//         <label htmlFor="">Category</label>
//         <select
//           name=""
//           id=""
//           value={expenseQuery.category}
//           onChange={(e) => handleChange("Category", e)}
//         >
//           <option value="">Select</option>
//           <option value="Money Transfer">Money Transfer</option>
//           <option value="Cash Withdrawal">Cash Withdrawal</option>
//           <option value="General Expense">General Expense</option>
//           <option value="Food&Dining">Food&Dining</option>
//           <option value="HealthCare">HealthCare</option>
//           <option value="Shopping">Shopping</option>
//           <option value="Travel">Travel</option>
//         </select>

//         <label htmlFor="">Type</label>
//         <select
//           value={expenseQuery.type}
//           onChange={(e) => handleChange("type", e)}
//         >
//           <option value="">select</option>
//           <option value="">debit</option>
//           <option value="">credit</option>
//         </select>

//         <label htmlFor="">sort</label>
//         <select
//           name=""
//           id=""
//           value={expenseQuery.sort}
//           onChange={(e) => handleChange("sort", e)}
//         >
//           <option value="">Select Type</option>
//           <option value="asc">ascending</option>
//           <option value="desc">descending</option>
//           <option value="moneyAsc">Money Ascending</option>
//           <option value="moneyDsc">Money Descending</option>
//         </select>
//       </form>

//       <br />

//       <table border={2}>
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>title</th>
//             <th>description</th>
//             <th>amount</th>
//             <th>date</th>
//             <th>category</th>
//             <th>type</th>
//             <th colSpan={2}>actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filterList.map((t, index) => {
//             return (
//               <tr key={t.id}>
//                 <td>{index + 1}</td>
//                 <td>{t.title}</td>
//                 <td>{t.description}</td>
//                 <td>{t.amount}</td>
//                 <td>{t.date}</td>
//                 <td>{t.category}</td>
//                 <td>{t.type}</td>
//                 <td>
//                   <button onClick={() => handleEdit(t.id)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleDelete(t.id)}>delete</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default ExpenseList;

import React, { useContext, useState } from "react";
import { expenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenseList, handleDelete, handleEdit } = useContext(expenseContext);

  const [expenseQuery, setExpenseQuery] = useState({
    title: "",
    type: "all",
    category: "all",
    sort: "",
  });

  const handleChange = (field, e) => {
    setExpenseQuery((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  // Search and Filter
  let filterList = expenseList.filter((expense) => {
    const titleMatch = expense.title
      ?.toLowerCase()
      .includes(expenseQuery.title.toLowerCase());

    const typeMatch =
      expenseQuery.type === "all" || expense.type === expenseQuery.type;

    const categoryMatch =
      expenseQuery.category === "all" ||
      expense.category === expenseQuery.category;

    return titleMatch && typeMatch && categoryMatch;
  });

  // Sorting
  filterList = [...filterList];

  switch (expenseQuery.sort) {
    case "asc":
      filterList.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
      break;

    case "desc":
      filterList.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
      break;

    case "moneyAsc":
      filterList.sort((a, b) => Number(a.amount) - Number(b.amount));
      break;

    case "moneyDsc":
      filterList.sort((a, b) => Number(b.amount) - Number(a.amount));
      break;

    default:
      break;
  }

  return (
    <>
      <h2>Expense List</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Search by Title */}
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          type="text"
          placeholder="Enter Title"
          value={expenseQuery.title}
          onChange={(e) => handleChange("title", e)}
        />{" "}
        {/* Category Filter */}
        <label htmlFor="category">Category: </label>
        <select
          id="category"
          value={expenseQuery.category}
          onChange={(e) => handleChange("category", e)}
        >
          <option value="all">All Categories</option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>{" "}
        {/* Type Filter */}
        <label htmlFor="type">Type: </label>
        <select
          id="type"
          value={expenseQuery.type}
          onChange={(e) => handleChange("type", e)}
        >
          <option value="all">All Types</option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>{" "}
        {/* Sorting */}
        <label htmlFor="sort">Sort: </label>
        <select
          id="sort"
          value={expenseQuery.sort}
          onChange={(e) => handleChange("sort", e)}
        >
          <option value="">Default Order</option>
          <option value="asc">Title A-Z</option>
          <option value="desc">Title Z-A</option>
          <option value="moneyAsc">Amount Low to High</option>
          <option value="moneyDsc">Amount High to Low</option>
        </select>{" "}
        <button
          type="button"
          onClick={() =>
            setExpenseQuery({
              title: "",
              type: "all",
              category: "all",
              sort: "",
            })
          }
        >
          Reset Filters
        </button>
      </form>

      <br />

      <p>Total Records: {filterList.length}</p>

      <table border={2} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filterList.length > 0 ? (
            filterList.map((expense, index) => (
              <tr key={expense.id}>
                <td>{index + 1}</td>
                <td>{expense.title}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>{expense.type}</td>
                <td>
                  <button type="button" onClick={() => handleEdit(expense.id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9}>No expenses found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
  