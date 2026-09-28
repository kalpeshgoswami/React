import React, { useEffect, useState } from 'react'

const AddTodo = ({ AddTodo,EditVal }) => {

    const [input, setInput] = useState({
        Task: "",
        Description: ""
    });

    useEffect(()=>{
        EditVal?setInput(EditVal):null
    },[EditVal]);

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        handleAdd
        (input)

        setInput({
            Task: "",
            Description: ""
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Enter your Task' value={input.Task} onChange={(e) => handleChange("Task", e)} />

                <br /><br />

                <input type="text" placeholder='Enter your Description' value={input.Description} onChange={(e) => handleChange("Description", e)} />

                <br /><br />

                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default AddTodo
