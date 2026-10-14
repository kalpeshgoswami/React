import React, { useState } from 'react'

const Add = () => {

    const [input, setInput] = useState({
        title: "",
        description: "",
        amount: "",
        date: "",
        category: "",
        type: ""
    })

    console.log("input", input);

    const handleChange = (e, field) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onCLick={handleSubmit}>

                <input type="text" placeholder='Enter title' value={input.title} onChange={(e) => handleChange("title", e)} />

                <br />

                <input type="text" placeholder='Enter Description' value={input.description} onChange={(e) => handleChange("description", e)} />

                <br />

                <input type="Number" placeholder='Enter Amount' value={input.amount} onChange={(e) => handleChange("amount", e)} />

                <br />

                <input type="date" placeholder='Enter date' value={input.date} onChange={(e) => handleChange("date", e)} />

                <br />

                <input type="text" placeholder='Enter category' value={input.category} onChange={(e) => handleChange("category", e)} />

                <br />

                <input type="text" placeholder='Enter type' value={input.type} onChange={(e) => handleChange("type", e)} />

                <br />

                <button type='submit'>Add</button>

            </form>
        </>
    )
}

export default Add