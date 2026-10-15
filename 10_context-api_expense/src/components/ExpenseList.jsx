import React, { useContext } from 'react'
import { expenseContext } from '../context/ExpenseContext'

const ExpenseList = () => {

    const { expenseList } = useContext(expenseContext)

    return (

        <>

            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>title</td>
                        <td>description</td>
                        <td>amount</td>
                        <td>date</td>
                        <td>category</td>
                        <td>type</td>
                    </tr>
                </thead>
                <tbody>
                    {expenseList.map((t, index) => {
                        return (
                            <tr key={t.id}>
                                <td>{index + 1}</td>
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                                <td>{t.amount}</td>
                                <td>{t.date}</td>
                                <td>{t.category}</td>
                                <td>{t.type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>

    )
}

export default ExpenseList