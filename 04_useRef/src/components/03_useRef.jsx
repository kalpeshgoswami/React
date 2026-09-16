import { useRef } from "react";

const InputName = () => {

    const name = useRef("")

    const handleSubmit =(e)=> {
        e.preventDefault()

        console.log("name",name.current.value)
    }
   
    
    
}