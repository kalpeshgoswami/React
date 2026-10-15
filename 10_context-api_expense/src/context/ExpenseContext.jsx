import { Children, createContext, useState } from "react";

export const expenseContext = createContext({
    expenseList: [],
    addExpense: () => { }
});

const ExpenseContext = ({ children }) => {

    const initialValues = [{
        title: "abcd",
        description: "abcd",
        amount: "100",
        date: "01/01/2004",
        category: "abcd",
        type: "abcd"
    }, {
        title: "abcd",
        description: "abcd",
        amount: "100",
        date: "01/01/2004",
        category: "abcd",
        type: "abcd"
    }]


    const [expenseList, setExpenseList] = useState(initialValues)

    const addExpense = (input) => {
        const newExpense = {
            ...input,
            id: Date.now(),
        }
        setExpenseList((prev) => [...prev, newExpense])
    }
    const value = {
        expenseList,
        addExpense

    }


    return (
        <expenseContext.Provider value={value}>{children}</expenseContext.Provider>
    )

}

export default ExpenseContext