import React, { useState } from 'react'

const AddTodo = () => {

    const [input, setInput] = useState({
        task: "",
        description: ""
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

        setInput({
            task: "",
            description: ""
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Enter your task' value={input.task} onChange={(e) => handleChange("task", e)} />

                <br /><br />

                <input type="text" placeholder='Enter your description' value={input.description} onChange={(e) => handleChange("description", e)} />

                <br /><br />

                <button type="submit">Click</button>

            </form>
        </>
    )
}

export default AddTodo
