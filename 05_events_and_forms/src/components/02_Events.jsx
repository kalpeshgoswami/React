import { useState } from "react";

const Event = () => {

    const [name, setName] = useState(""); 

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = () => {
        alert(`Hi there ${name}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => handleChange(e)} />
            </form>

            <br /><br />

            <button type="submit">Submit</button>
        </>
    )
}

export default Event