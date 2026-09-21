import { useState } from "react";

const Validation = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [users, setUsers] = useState([]);
    const [error, setError] = useState([]);

    const Validation = () => {

        const newError = {};

        if (input.name === "") {
            newError.name = "name is required"
        }

        if (input.email === "") {
            newError.email = "Email is required"
        }

        if (!input.email.includes("@")) {
            newError.email = "invalid email";
        }

        if (!input.password) {
            newError.password = "password must be atleast 6 character long"
        }

        return newError

    }

    const handleChange = (field, e) => {

        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value,
            }
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const validate = Validation();

        if (Object.keys(validate).length > 0) {
            setError(validate);
        } else {
            setUsers((prev) => [...prev, input]);
            alert("user data saved")
        }
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter your name"
                    value={input.name}
                    onChange={(e) => handleChange("name", e)}
                />

                {error.name ? <p style={{ color: "red" }}>{error.email}</p> : null}

                <br />
                <br />

                <input
                    type="password"
                    placeholder="enter your password"
                    value={input.password}
                    onChange={(e) => handleChange("password", e)}
                />

                {error.password ? (
                    <p style={{ color: "red" }}>{error.password}</p>

                ) : null}
                <br />
                <br />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Validation