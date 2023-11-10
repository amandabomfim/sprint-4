import { Inter } from "next/font/google";
import "././globals.css";
import ComponenteLogo from "@/components/ComponenteLogo";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VISTORIA - PORTO SEGURO",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ComponenteLogo />
        <div className="componente-imagem">
          <figure>
            <Image
              src="/imgpaginaprincipal.jpeg"
              alt="Logotipo da Porto"
              width={217}
              height={120}
            />
          </figure>
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
              <Link href="/planos">
                <button className="botao-padrao tamanho-1-5rem">
                  Iniciar Vistoria
                </button>
              </Link>
              <Link href="/equipe">
                <button className="botao-padrao tamanho-1-5rem">Equipe</button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
