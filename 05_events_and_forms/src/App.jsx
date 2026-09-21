import { useState } from "react"
import OnClick_01 from "./components/01_OnClick"
import Event from "./components/02_Events"
import Validation from "./components/08_Validation";

const App = () => {

  const [input, setInput] = useState("");
  const [name, setName] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setName((prev) => [...prev, input]);
  }


  return (
    <>
      {/* <OnClick_01/> */}

      {/* <Event /> */}

      <Validation />
    </>
  )

}

export default App