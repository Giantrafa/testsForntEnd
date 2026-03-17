"use client";
import { useState } from "react";
import Texto from "./Texto";
const textos = ["texto1", "texto2", "texto3"];
export default function GeradorTextoAleatorio({ children }) {
  const [indice, setIndice] = useState(0);
  function handleClick(evt) {
    console.log("evt target = ", evt.target);
    const num = Math.floor(Math.random() * textos.length);
    setIndice(num);
  }
  return (
    <>
      <p>{indice}</p>
      <Texto msg={textos[indice]} />
      <Texto msg={textos[indice]} />
      <Texto msg="está fixo" />
      <button onClick={handleClick}>{children}</button>
    </>
  );
}