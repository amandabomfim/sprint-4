import PagConfirmacao from "/public/PagConfirmacao.png";
import styles from "./Confirmacao.module.css";
import Image from "next/image";

export default function Confirmacao() {
    return (
        <main className={styles.mainConfirmacao}>
            <div className={styles.conteudoConfirmacao}>
                <div className={styles.conteudoConfirmacao}>
                    <div className={styles.centralizarImgConfirmacao}>
                        <Image
                            src={PagConfirmacao}
                            alt="Confirmacao"
                            className={styles.imgPagConfirmacao}
                            width={700}
                            height={590}
                        />
                    </div>

                    <div >
                        <h1 className={styles.tituloPagConfirmacao}>FOTOS ENVIADAS COM SUCESSO! </h1>
                        <p className={styles.txtPagConfirmacao}>
                            AS IMAGENS ESTÃO SENDO ANALISADAS PELA NOSSA EQUIPE
                            E EM BREVE ENTRAREMOS EM CONTATO PELO E-MAIL
                            CADASTRADO.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
