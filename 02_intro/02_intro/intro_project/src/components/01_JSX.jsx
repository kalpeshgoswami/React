import React from "react";

let JSX = () => {

    // without jsx
    let element = React.createElement("h1", null, "without jsx");

    // with jsx
    element = <h1>this is with jsx</h1 >

    return <>{element}</>

}

export default JSX