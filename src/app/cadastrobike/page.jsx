'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Cadastrobike.module.scss";

export default function CadastroBike() {
    const [bikeData, setBikeData] = useState({
        marca : "",
        nr_modelo: "",
        modelo: "",
        tipo: "",
        cd_serie: "",
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
                        Marca:
                        <input
                            type="text"
                            name="marca"
                            value={bikeData.marca}
                            onChange={handleChange}
                            required
                            maxLength={50}
                        />
                    </label>
                    
                    <label>
                        Modelo:
                        <input
                            type="text"
                            name="modelo"
                            value={bikeData.modelo}
                            onChange={handleChange}
                            required
                            maxLength={50}
                        />
                    </label>

                    <label>
                        Nr. Modelo:
                        <input
                            type="number"
                            name="nr_modelo"
                            value={bikeData.nr_modelo}
                            onChange={handleChange}
                            required
                            maxLength={10}
                        />
                    </label>

                    <label>
                        Tipo:
                        <input
                            type="text"
                            name="tipo"
                            value={bikeData.tipo}
                            onChange={handleChange}
                            maxLength={20}
                            required
                        />
                    </label>
                    <label>
                        Cod. Série:
                        <input
                            type="text"
                            name="cd_serie"
                            value={bikeData.cd_serie}
                            onChange={handleChange}
                            maxLength={16}
                            required
                        />
                    </label>
                    <label>
                        Valor:
                        <input
                            type="number"
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
                            required
                            maxLength={100}
                        />
                    </label>
                    <button type="submit">Cadastrar Bicicleta</button>
                </form>
        </main>
    );
}
