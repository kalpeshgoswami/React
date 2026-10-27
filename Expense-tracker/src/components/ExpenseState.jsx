
import { useContext } from 'react'
import { expenseContext } from '../context/ExpenseContext'

const ExpenseStats = () => {

    const { balance, credit, debit } = useContext(expenseContext)

    return (
        <>
            <h2>Credit:{credit}</h2>
            <h2>Debit:{debit}</h2>
            <h2>Balance:{balance}</h2>
        </>
    )
}

export default ExpenseStats