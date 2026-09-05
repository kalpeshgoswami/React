// import { useState } from "react";

// const States = () => {
//     const [count, setCount] = useState(0);

//     const handleIncrement = () => {
//         setCount(count + 1);
//     }

//     return (
//         <>

//             <h1>count value: {count}</h1>

//             <button onClick={handleIncrement}>Increment</button>
//         </>
//     )
// }

// export default States



import { useState } from "react";

const States = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>

            <h1>count value :{count}</h1>

            <button onClick={() => {
                handleIncrement();
                handleIncrement();
                handleIncrement();
                handleIncrement();
                handleIncrement();
            }}>increment +5</button>
        </>
    )

}

export default States