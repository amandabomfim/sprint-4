import UploadFoto from "/public/UploadFoto.png";
import ComponenteUpload from "@/components/ComponenteUploud";
import NavButtons from "@/components/NavButtons/NavButtons";

export default function Upload() {
  return (
    <main>
      <div className="colunmConfirmacao">
        <div className="LinksNavUpload">
          <NavButtons anterior="cadastro/bike" proximo="confirmacao" />
        </div>
        <div className="titulo">
          <h1>VISTORIA</h1>
          <div className="instrucaoFoto">
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
        </div>
        <div className="alinhamentoUpload">
          <img src={UploadFoto} alt="Upload" className="uploadFoto" />
        </div>
        <div className="Upload-container">
          <div className="fotoFrente">
            <ComponenteUpload titulo="Foto Frontal"></ComponenteUpload>
          </div>

          <div className="fotoLateralEsquerda">
            <ComponenteUpload titulo="Foto Lateral Esquerda"></ComponenteUpload>
          </div>

          <div className="fotoLateralDireita">
            <ComponenteUpload titulo="Foto Lateral Direita"></ComponenteUpload>
          </div>

          <div className="fotoNumSerie">
            <ComponenteUpload titulo="Foto Número Série"></ComponenteUpload>
          </div>
        </div>
      </div>
    </main>
  );
}
