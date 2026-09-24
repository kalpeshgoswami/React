import React, { useState } from 'react'

const AddTodo = ({ handleAdd }) => {

    const [input, setInput] = useState({
        Task: "",
        Description: ""
    })

    const handleChange = (field, e) => {
        setInput((pre) => {
            return {
                ...pre,
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
