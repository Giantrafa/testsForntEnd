"use client";
import GeradorAleatorio from "@/components/GeradorAleatorio";
import TeaGathering from "@/components/loopContador";
import Profile from "@/components/Profile";
import GeradorTextoAleatorio from "@/components/GeradorTextoAleatorio";
import Link from "next/link";
import { useTaskFilter } from "@/zustand";

/* 
//import JogoDados from "@/components/JogoDados";
//caminho errado mas e so pra ter uma copia
//<JogoDados />
*/

export default function Home() {
  const filtrarConcluidas = useTaskFilter((state) => state.filtrarConcluidas);
  return (
    <div>
      <Link href="/tarefas">Lista de Tarefas</Link> (Filtro ativado:{" "}
      {filtrarConcluidas ? "Sim" : "Não"})
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