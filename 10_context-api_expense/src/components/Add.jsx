import React, { useContext, useEffect, useState } from 'react'
import { expenseContext } from '../context/ExpenseContext';

// const Add = ({ handleAdd }) => {

//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         amount: "",
//         date: "",
//         category: "",
//         type: ""
//     })

//     console.log("input", input);

//     const { addExpense,editVal}=useContext(expenseContext)

//     const handleChange = (field, e) => {
//         setInput((prev) => {
//             return {
//                 ...prev,
//                 [field]: e.target.value
//             };
//         });
//     };

//     useEffect(()=>{
//         editVal?setInput(editVal):null;
//     },[editVal])

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         handleAdd({
//             ...input,
//             amount: Number(input.amount)
//         })
//         setInput({
//             title: "",
//             description: "",
//             amount: "",
//             date: "",
//             category: "",
//             type: ""
//         })
//         setInput(initialForm);
//     }


const initialForm = {

    title: "",
    description: "",
    amount: "",
    date: "",
    category: "",
    type: ""

}

const Add = () => {

    const { addExpense, editVal } = useContext(expenseContext);
    const [input, setInput] = useState(initialForm);

    useEffect(() => {
        editVal ? setInput(editVal) : null;
    }, [editVal])


    const handleChange = (field, e) => {
        setInput((prev) => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addExpense({
            ...input,
            amount: Number(input.amount)
        })

        setInput(initialForm)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <br />

                <input type="text" placeholder='Enter title' value={input.title} onChange={(e) => handleChange("title", e)} />

                <br /><br />

                <input type="text" placeholder='Enter Description' value={input.description} onChange={(e) => handleChange("description", e)} />

                <br /><br />

                <input type="Number" placeholder='Enter Amount' value={input.amount} onChange={(e) => handleChange("amount", e)} />

                <br /><br />

                <input type="date" placeholder='Enter date' value={input.date} onChange={(e) => handleChange("date", e)} />

                <br /><br />

                <input type="text" placeholder='Enter category' value={input.category} onChange={(e) => handleChange("category", e)} />

                <br /><br />

                <input type="text" placeholder='Enter type' value={input.type} onChange={(e) => handleChange("type", e)} />

                <br /><br />

                <button type='submit'>Add</button>

                <br /><br />

            </form>
        </>
    )
}

export default Add