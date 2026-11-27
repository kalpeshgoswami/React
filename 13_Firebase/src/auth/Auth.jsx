import React from "react";

const Auth = () => {
  return (
    <div>
      <h2>Login Form</h2>

      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <br />

        <button type="submit">Sign In</button>
        <button type="button">Sign Out</button>
      </form>
    </div>
  );
};

export default Auth;
