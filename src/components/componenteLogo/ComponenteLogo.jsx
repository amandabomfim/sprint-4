import Image from "next/image";
import styles from "./ComponenteLogo.module.css";

export default function ComponenteLogo() {
  return (
    <div className={styles.componenteLogo}>
          <Image src="/LogoPreto.png" alt="Logotipo da Porto" width={217} height={120}/>
      </div>
  );
}