import GeradorAleatorio from "@/components/GeradorAleatorio";
import TeaGathering from "@/components/loopContador";
import Profile from "@/components/Profile";
import GeradorTextoAleatorio from "@/components/GeradorTextoAleatorio";
import Link from "next/link";

/* 
//import JogoDados from "@/components/JogoDados";
//caminho errado mas e so pra ter uma copia
//<JogoDados />
*/

export default function Home() {
  return (
    <div>
      <Link href="/tarefas">Lista de Tarefas</Link>
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