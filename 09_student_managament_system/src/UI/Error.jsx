import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error = () => {
  return (
    <div className="text-center mt-5">
      <h1>404</h1>
      <h3>Page Not Found</h3>

      <Button as={Link} to="/" variant="primary">
        Go Home
      </Button>
    </div>
  );
};

export default Error;