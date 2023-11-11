import Link from "next/link";
import styles from "./NavButtons.module.css";

export default function NavButtons(props) {
  return (
    <div className={styles.linksNavUpload}>
    <div className={styles.botoesGapNavbuttons}>
      <Link href={`/${props.anterior}`}>
        <button className="botaoPadrao">Anterior</button>
      </Link>
      <Link href={`/${props.proximo}`}>
        <button className="botaoPadrao">Próximo</button>
      </Link>
    </div>
    </div>
  );
}
