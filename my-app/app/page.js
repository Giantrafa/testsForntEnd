import styles from "./page.module.css";
import GeradorAleatorio from "@/components/GeradorAleatorio";
import TeaGathering from "@/components/loopContador";
import Profile from "@/components/Profile";
import GeradorTextoAleatorio from "@/components/GeradorTextoAleatorio";

export default function Home() {
  return (
    <div>
      <GeradorAleatorio/>
      <TeaGathering/>
      <Profile/>
       <hr />
      <GeradorTextoAleatorio>Gerador Texto 1</GeradorTextoAleatorio>
      <hr />
      <GeradorTextoAleatorio>Gerador Texto 2</GeradorTextoAleatorio>
    </div>
  );
}
