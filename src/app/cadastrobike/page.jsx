'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Cadastrobike.module.scss";


/* Cadastro bike */
export default function CadastroBike() {
    const [bikeData, setBikeData] = useState({
        dsEmail : "",
        nmMarca : "",
        nrModelo: "",
        nmModelo: "",
        tpBicicleta: "",
        cdSerie: "",
        vlBicicleta: "",
        nmAcessorio: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBikeData({ ...bikeData, [name]: value });
    };

    const navigate = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bikeData.nmAcessorio === "") {
            setBikeData({ ...bikeData, nmAcessorio: "Nenhum" });
        }
        fetch("/api/vistoria", {
            method: "POST",
            body: JSON.stringify(bikeData),
        });
        navigate.push("/upload");
    };

    return (
        <main className={styles.cadastroBikeMain}>
            <div className={styles.titulo}>CADASTRO BIKE</div>
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
