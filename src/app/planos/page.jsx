import ComponentePlano from "@/components/ComponentePlano";
import Link from "next/link";
import styles from "./planos.module.css";

export default function Plano() {
  return (
    <main>
    <div className={styles.sectionPlano}>
      <div className={styles.titulo}><h1>ESCOLHA SEU SEGURO:</h1></div>
      <div className={styles.planoContainer}>
        <Link href="/cadastro">
          <div className={styles.pedalEssencial}>
            <ComponentePlano titulo="Pedal Essencial">
              <ul>
                <li>Reparo de câmaras de ar.</li>
                <li>Reparo ou troca de correntes.</li>
                <li>Substituição ou regulagem de selim e canote de selim.</li>
                <li>Substituição e regulagem manetes de freios e cabo de aço.</li>
                <li>Substituição ou regulagem de freio dianteiro e traseiro.</li>
              </ul>
            </ComponentePlano>
          </div>
        </Link>
        <Link href="/cadastro">
          <div className={styles.pedalLeve}>
            <ComponentePlano titulo="Pedal Leve">
              <ul>
                <li>Todos os benefícios do Pedal Essencial.</li>
                <li>Lubrificação de correntes e coroas.</li>
                <li>
                  Transporte do segurado e Bike - limite de 50km, em caso de
                  quebra ou acidente.
                </li>
              </ul>
            </ComponentePlano>
          </div>
        </Link>
        <Link href="/cadastro">
          <div className={styles.pedalElite}>
            <ComponentePlano titulo="Pedal Elite">
              <ul>
                <li>Todos os benefícios do Pedal Leve.</li>
                <li>
                  Transporte do segurado e Bike - limite de 150km, em caso de
                  quebra ou acidente.
                </li>
                <li>Instalação de suporte de parede e chão para bike.</li>
                <li>
                  Serviço de Leva e Traz, com limite de 50km, mediante
                  agendamento prévio.
                </li>
              </ul>
            </ComponentePlano>
          </div>
        </Link>
      </div>
    </div>
  </main>
  
  );
}
