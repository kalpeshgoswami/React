import React, { useState } from "react";

const Auth = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (field, e) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Input Data:", input);

    if (isSignUp) {
      console.log("Sign Up Successfully");
    } else {
      console.log("Login Successfully");
    }
  };

  const handleReset = () => {
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>{isSignUp ? "Sign Up Form" : "Login Form"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={input.email}
            onChange={(e) => handleChange("email", e)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={(e) => handleChange("password", e)}
            required
          />
        </div>

        <br />

        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <br />

      <button
        type="button"
        onClick={() => {
          setIsSignUp(!isSignUp);
          handleReset();
        }}
      >
        {isSignUp
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default Auth;
