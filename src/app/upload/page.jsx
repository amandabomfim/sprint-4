"use client";
import styles from "./Upload.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import fotoBike from "/public/fotoBike.svg";

export default function Upload() {
  const [msg, setMsg] = useState("");
  const [bike, setBike] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBike(JSON.parse(localStorage.getItem("bike")));
    }
  }, []);
  const naviation = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get data from form
    const form = new FormData(e.target);
    form.append("image", e.target.fotoBike.files[0]);

    const response = await fetch("/api/vistoria", {
      method: "POST",
      body: JSON.stringify({ form: form, bike: bike }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status == 200) {
      
      setMsg("Cadastrado com sucesso");
      setTimeout(() => {
        setMsg("");
        localStorage.removeItem("bike");
        naviation.push("/confirmacao");
      }, 3000);
    } else {
      setMsg("Falha no cadastro");
      setTimeout(() => {
        setMsg("");
        localStorage.removeItem("bike");
        naviation.push("/cadastrobike");
      }, 3000);
    }
  };

  return bike == null ? (
    <main className={styles.centralizarMain}>
      <h1>Faça o cadastro da bicicleta antes</h1>
    </main>
  ) : (
    <main className={styles.uploadMain}>
      <div className={styles.colunmConfirmacao}>
        <div className={styles.titulo}>
          <h1>VISTORIA</h1>
          <h1>{msg}</h1>
        </div>
        <div className={styles.instrucaoFoto}>
          <ul>
            <li>
              Escolha um local bem iluminado e com um fundo neutro para que a
              bicicleta seja claramente visível.
            </li>
            <li>Evite áreas com muita sombra ou reflexos.</li>
            <li>Tire a foto de acordo com a posição indicada.</li>
            <li>Realize o upload das imagens no local indicado.</li>
          </ul>
        </div>
        <h1>{msg}</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.UploadContainer}>
            <div className={styles.foto}>
              <Image alt="bike" className={styles.fotoBike} src={fotoBike} />
              <div>
                <p>Envie uma foto do lado direito da bike:</p>
                <input type="file" required name="fotoBike" id="fotoBike" />
              </div>
            </div>
          </div>
          <button className="botaoPadrao" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
