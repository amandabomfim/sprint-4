import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";
import imagemBicicleta from "/public/imgpaginaprincipal.jpeg";

export default function Home() {
    return (
        <>
            <main className={styles.paginaPrincipal}>
              <div className={styles.leftColumn}>
            <div className={styles.conteudoPrincipal}>
                    <h1>Seguro de bicicleta</h1>
                    <div className={styles.textLeftPI}>
                        <h2>Com o seguro você terá:</h2>
                        <ul>
                            <li>Proteção contra roubos</li>
                            <li>Cobertura contra danos</li>
                            <li>Assistência técnica e muito mais</li>
                        </ul>
                    </div>
                    <div className={styles.botoesPaginaInicial}>
                        <Link href="/planos">
                            <button className={`botaoPadrao ${styles.tamanho_1_5rem}`}>
                                Iniciar Vistoria
                            </button>
                        </Link>
                        <Link href="/equipe">
                            <button className={`botaoPadrao ${styles.tamanho_1_5rem}`}>
                                Equipe
                            </button>
                        </Link>
                    </div>
                </div>
                </div>
                <div className={styles.rightColumn}>
                <div className="imagemBicicleta">
                  <Image src={imagemBicicleta} alt="Imagem_bicicleta" width={600} height={900}/>
                    </div>
                  </div>                
            </main>
        </>
    );
}
