'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Cadastrobike.module.scss";

export default function CadastroBike() {
    const [bikeData, setBikeData] = useState({
        modelo: "",
        tipo: "",
        cor: "",
        tamanhoAro: "",
        valor: "",
        acessorios: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBikeData({ ...bikeData, [name]: value });
    };

    const navigate = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate.push("/upload");
    };

    return (
        <main className={styles.cadastroBikeMain}>
            <div className={styles.titulo}>CADASTRO BIKE</div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Modelo:
                        <input
                            type="text"
                            name="modelo"
                            value={bikeData.modelo}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Tipo:
                        <input
                            type="text"
                            name="tipo"
                            value={bikeData.tipo}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Cor:
                        <input
                            type="text"
                            name="cor"
                            value={bikeData.cor}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Tamanho do Aro:
                        <input
                            type="text"
                            name="tamanhoAro"
                            value={bikeData.tamanhoAro}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Valor:
                        <input
                            type="text"
                            name="valor"
                            value={bikeData.valor}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Acessórios (opcional):
                        <textarea
                            name="acessorios"
                            value={bikeData.acessorios}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Cadastrar Bicicleta</button>
                </form>
        </main>
    );
}
