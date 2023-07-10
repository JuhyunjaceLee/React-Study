import React from "react";

export default function AppCard() {
  return (
    <>
      <Card>
        <h1>This is Card</h1>
      </Card>

      <Card>
        <p>This is Card</p>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
