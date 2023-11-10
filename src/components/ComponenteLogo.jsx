import Image from "next/image";

export default function ComponenteLogo() {
  return (
    <div>
        <figure>
          <Image src="/LogoPreto.png" alt="Logotipo da Porto" width={217} height={120}/>
        </figure>
      </div>
  );
}