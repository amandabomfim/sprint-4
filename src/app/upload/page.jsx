import ComponenteUpload from "@/components/ComponenteUploud";
import NavButtons from "@/components/NavButtons/NavButtons";
import styles from "./Upload.module.css";

export default function Upload() {
  return (
    <main className={styles.uploadMain}>
       <NavButtons anterior="cadastro/bike" proximo="confirmacao" />
  <div className={styles.colunmConfirmacao}>
    <div className={styles.titulo}>
      <h1>VISTORIA</h1>
      </div>
      <div className={styles.instrucaoFoto}>
        <ul>
          <li>
            Escolha um local bem iluminado e com um fundo neutro para que a
            bicicleta seja claramente visível.
          </li>
          <li>Evite áreas com muita sombra ou reflexos.</li>
          <li>Tire as fotos de acordo com as posições indicadas.</li>
          <li>Realize o upload das imagens no local indicado.</li>
        </ul>
      </div>
    <div className={styles.UploadContainer}>
      <div className={styles.fotoFrente}>
        <ComponenteUpload titulo="Foto Frontal"></ComponenteUpload>
      </div>
      <div className={styles.fotoLateral}>
        <ComponenteUpload titulo="Foto Lateral"></ComponenteUpload>
      </div>
    </div>
  </div>
</main>

  );
}
