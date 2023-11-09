import Image from "next/image";

export default function ComponenteLogo() {
  return (
    <div className="componente-imagem">
        <figure>
          <Image src="/imgpaginaprincipal.jpeg" alt="Logotipo da Porto" width={217} height={120}/>
        </figure>
      </div>
  );
}