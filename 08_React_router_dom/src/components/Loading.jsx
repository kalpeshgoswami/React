
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f9fa",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px 45px",
          borderRadius: "18px",
          textAlign: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "7px",
            marginBottom: "18px",
          }}
        >
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <h5 style={{ margin: 0 }}>Loading...</h5>

        <p
          style={{
            margin: "8px 0 0",
            color: "#6c757d",
            fontSize: "13px",
          }}
        >
          Please wait
        </p>

       
      </div>
    </div>
  );
};

export default Loading;
