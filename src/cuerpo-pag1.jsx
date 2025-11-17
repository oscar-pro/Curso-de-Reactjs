import React from "react";
import "./header-pag1.css";
import { useState } from "react";

export function CuerpoPag1({ title, description, buttonText }) {
    const [istrue, setIsTrue] = useState(true);
    const falsE = () => {
        setIsTrue(!istrue);
    };

    return (
    <main className="cuerpo-pag1">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={
        falsE
      }>{buttonText}</button>
    </main>
  );
}