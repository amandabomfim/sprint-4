import Link  from "next/link";
import styles from "./Equipe.module.scss";

export default function Equipe() {
  return (
    <main className={styles.equipeMain}>
      <div className={styles.tituloEquipe}>
        <h1>EQUIPE</h1>
      </div>
      <div className={styles.equipe}>
        <ul>
          <li>99741 - Amanda Bomfim de Oliveira </li>
          <li>97798 - Ester Dutra da Silva</li>
          <li>550981 -Henrique Gerson Costa Correia</li>
          <li>99738 - Leonardo Dos Santos Guerra</li>
          <li>99004 -Maria Eduarda Ferreira da Mata</li>
          <li>551216 - Matheus Pinho Oliveira</li>
          <li>
            <Link href="https://github.com/amandabomfim/sprint-4" target="_blank">
              Link do repositório
            </Link>
          </li>
        </ul>
      </div>
        <Link href="/">
          <button className="botaoPadrao"> Voltar</button>
        </Link>
    </main>
  );
}
