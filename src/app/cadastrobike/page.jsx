"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Cadastrobike.module.scss";

/* Cadastro bike */
export default function CadastroBike() {
    const [bikeData, setBikeData] = useState({
        dsEmail: "",
        nmMarca: "",
        nrModelo: "",
        nmModelo: "",
        tpBicicleta: "",
        cdSerie: "",
        vlBicicleta: "",
        nmAcessorio: "",
    });

    const [msg, setmsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBikeData({ ...bikeData, [name]: value });
    };

    const navigate = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Caso o campo de acessórios esteja vazio, o valor "Nenhum" é atribuído a ele
        if (bikeData.nmAcessorio === "") {
            setBikeData({ ...bikeData, nmAcessorio: "Nenhum" });
        }
        // Faz uma requisição para a API com os dados do formulário
        const response = await fetch("/api/vistoria", {
            method: "POST",
            body: JSON.stringify(bikeData),
        });
        // Realiza a rolagem suave para o topo da página
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        // Recebe a resposta da requisição da API
        const msgResponse = await response.json();
        // Lógica para exibir mensagens com base nas respostas da API
        if (msgResponse.status == 200) {
            setmsg(msgResponse.body);
            setTimeout(() => {
                setmsg("");
                navigate.push("/upload");
            }, 3000);
        }
        if (msgResponse.status == 400) {
            setmsg(msgResponse.body);
            setTimeout(() => {
                setFormData({ ...formData, dsEmail: "" });
                setmsg("");
            }, 3000);
        }
        if (msgResponse.status == 500) {
            setmsg(msgResponse.body);
            setTimeout(() => {
                setmsg("");
            }, 3000);
        }
        if (msgResponse.status == 404) {
            setmsg(msgResponse.body);
            setTimeout(() => {
                setmsg("");
            }, 3000);
        }
    };

    return (
        <main className={styles.cadastroBikeMain}>
            <div className={styles.titulo}>CADASTRO BIKE</div>
            <h1 className="text-center">{msg}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email Cadastrado:
                    <input
                        type="text"
                        name="dsEmail"
                        value={bikeData.dsEmail}
                        onChange={handleChange}
                        maxLength={50}
                        minLength={7}
                        required
                    />
                </label>

                <label>
                    Marca:
                    <input
                        type="text"
                        name="nmMarca"
                        value={bikeData.nmMarca}
                        onChange={handleChange}
                        required
                        maxLength={50}
                    />
                </label>

                <label>
                    Modelo:
                    <input
                        type="text"
                        name="nmModelo"
                        value={bikeData.nmModelo}
                        onChange={handleChange}
                        required
                        maxLength={50}
                    />
                </label>

                <label>
                    Nr. Modelo:
                    <input
                        type="number"
                        name="nrModelo"
                        value={bikeData.nrModelo}
                        onChange={handleChange}
                        required
                        maxLength={10}
                    />
                </label>

                <label>
                    Tipo:
                    <input
                        type="text"
                        name="tpBicicleta"
                        value={bikeData.tpBicicleta}
                        onChange={handleChange}
                        maxLength={20}
                        required
                    />
                </label>
                <label>
                    Cod. Série:
                    <input
                        type="text"
                        name="cdSerie"
                        value={bikeData.cdSerie}
                        onChange={handleChange}
                        maxLength={16}
                        required
                    />
                </label>
                <label>
                    Valor:
                    <input
                        type="number"
                        name="vlBicicleta"
                        value={bikeData.vlBicicleta}
                        onChange={handleChange}
                        min={2000}
                        required
                    />
                </label>
                <label>
                    Acessórios (opcional):
                    <textarea
                        name="nmAcessorio"
                        value={bikeData.nmAcessorio}
                        onChange={handleChange}
                        maxLength={100}
                    />
                </label>
                <button type="submit">Cadastrar Bicicleta</button>
            </form>
        </main>
    );
}
