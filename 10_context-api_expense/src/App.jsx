import { useContext } from "react"
import ExpenseContext, { expenseContext } from "./context/ExpenseContext"
import Add from "./components/Add"


const App = () => {

    const { expenseList } = useContext(expenseContext)

    console.log("expenseList", expenseList)

    return (
        <>
            <Add />
        </>
    )
}

export default App