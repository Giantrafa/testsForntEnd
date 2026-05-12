"use client";
import GeradorAleatorio from "@/components/GeradorAleatorio";
import TeaGathering from "@/components/loopContador";
import Profile from "@/components/Profile";
import GeradorTextoAleatorio from "@/components/GeradorTextoAleatorio";
import Link from "next/link";
import { useTaskFilter, useUserStorage } from "@/zustand";

/* 
//import JogoDados from "@/components/JogoDados";
//caminho errado mas e so pra ter uma copia
//<JogoDados />
*/

export default function Home() {
  const filtrarConcluidas = useTaskFilter((state) => state.filtrarConcluidas);
  const loggedUser = useUserStorage((state) => state.loggedUser);
  return (
    <div>
      <Link href="/tarefas">Lista de Tarefas</Link> (Filtro ativado:{" "}
      {filtrarConcluidas ? "Sim" : "Não"})
      <hr />
      <p>Usário logado: {loggedUser?.username ?? "Nenhum"}</p>
      {!loggedUser ? (
        <>
          <Link href="/signup">Sign Up</Link>
          <br />
          <Link href="/login">Log In</Link>
        </>
      ) : (
        <>
          <Link href="/logout">Log Out</Link>
          <hr />
        </>
      )}
      <hr />
      <GeradorAleatorio/>           
       <hr />
       <GeradorAleatorio/>       
       <hr />
      <TeaGathering/>
      <hr />
      <Profile/>    
       <hr />
      <GeradorTextoAleatorio>Gerador Texto 1</GeradorTextoAleatorio>
      <hr />
      <GeradorTextoAleatorio>Gerador Texto 2</GeradorTextoAleatorio>
    </div>
  );
}