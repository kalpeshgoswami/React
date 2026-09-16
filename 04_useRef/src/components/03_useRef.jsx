import { useRef } from "react";

const InputName = () => {

    const name = useRef("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("name", name.current.value)
    }

    console.log("it will not render again")


    return (

        <>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Enter your name" ref={name} />

                <br />

            <button type="submit">add</button>

            </form>

        </>

    )
}

export default InputName