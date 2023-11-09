import Link from "next/link";

export default function ConteudoPrincipal() {
  return (
    <div className="conteudoPrincipal">
        <h1>Seguro de bicicleta</h1>
        <div className="textLeft-PI">
          <h2>Com o seguro você terá:</h2>
          <ul>
          <li>Proteção contra roubos</li>
          <li>Cobertura contra danos</li>
          <li>Assistência técnica e muito mais</li>
          </ul>
        </div>
        <div className="botoes-pagina-inicial">
          <Link href=""><button className='botao-padrao tamanho-1-5rem'>Iniciar Vistoria</button></Link>
          <Link href=""><button className='botao-padrao tamanho-1-5rem'>Equipe</button></Link>
        </div>
  </div>
  );
}