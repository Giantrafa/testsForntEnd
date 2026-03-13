import styles from "./page.module.css";
import GeradorAleatorio from "@/components/GeradorAleatorio";
import TeaGathering from "@/components/loopContador";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div>
      <GeradorAleatorio/>
      <TeaGathering/>
      <Profile/>
    </div>
  );
}
