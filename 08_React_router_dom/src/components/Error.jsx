
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          background: "#fff",
          padding: "50px 30px",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div
          style={{
            fontSize: "100px",
            fontWeight: "800",
            lineHeight: "1",
            color: "#0d6efd",
            marginBottom: "15px",
          }}
        >
          404
        </div>

        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#0d6efd",
            borderRadius: "10px",
            margin: "0 auto 25px",
          }}
        />

        <h2
          style={{
            fontWeight: "700",
            marginBottom: "12px",
            color: "#212529",
          }}
        >
          Oops! Page Not Found
        </h2>

        <p
          style={{
            color: "#6c757d",
            fontSize: "16px",
            maxWidth: "450px",
            margin: "0 auto 30px",
            lineHeight: "1.6",
          }}
        >
          Sorry, the page you are looking for doesn't exist or may have
          been moved.
        </p>

        <Button
          as={Link}
          to="/"
          variant="primary"
          style={{
            padding: "10px 25px",
            borderRadius: "10px",
            fontWeight: "600",
          }}
        >
          ← Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Error;
