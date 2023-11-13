"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Cadastro.module.scss";

export default function Cadastro() {
    const [formData, setFormData] = useState({
        nmCliente: "",
        dtNascimento: "",
        dsEmail: "",
        rg: "",
        cpf: "",
        telefone: "",
        cep: "",
        dsEndereco: "",
    });

    const [msg, setmsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useRouter();

    const handleSubmit = async (e) => {
         // Faz uma requisição para a API com os dados do formulário
        e.preventDefault();
        const response = await fetch("/api/cliente", {
            method: "POST",
            body: JSON.stringify(formData),
        });
        // Realiza a rolagem suave para o topo da página
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // Recebe a resposta da requisição da API
        const msgResponse = await response.json();
        // Lógica para exibir mensagens com base nas respostas da API
        if (msgResponse.status == 200) {
            setmsg(msgResponse.body);
            setTimeout(() => {
                setmsg("");
                navigate.push("/cadastrobike");
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
        <main className={styles.cadastroMain}>
            <div className={styles.titulo}>CADASTRO</div>
            <h1 className="text-center">
                {msg}
            </h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.campo}>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nmCliente"
                        name="nmCliente"
                        value={formData.nmCliente}
                        onChange={handleChange}
                        maxLength={50}
                        minLength={5}
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input
                        type="date"
                        id="dtNascimento"
                        name="dtNascimento"
                        value={formData.dtNascimento}
                        onChange={handleChange}
                        max="2005-11-13"
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="dsEmail"
                        name="dsEmail"
                        value={formData.dsEmail}
                        onChange={handleChange}
                        maxLength={50}
                        minLength={7}
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="rg">RG (9 dígitos):</label>
                    <input
                        type="text"
                        id="rg"
                        name="rg"
                        value={formData.rg}
                        onChange={handleChange}
                        maxLength={9}
                        minLength={9}
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="cpf">CPF (11 dígitos):</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        maxLength={11}
                        minLength={11}
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="celular">Celular:</label>
                    <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        maxLength={15}
                        minLength={8}
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="cep">CEP (8 dígitos):</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        maxLength={8}
                        minLength={8}
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="endereco">Endereço:</label>
                    <input
                        type="text"
                        id="dsEndereco"
                        name="dsEndereco"
                        value={formData.dsEndereco}
                        onChange={handleChange}
                        maxLength={50}
                        minLength={5}
                        required
                    />
                </div>
                <button type="submit">Cadastrar Bicicleta</button>
                <p className={styles.txtPC}>
                    <Link href="/cadastrobike">já possou cadastro</Link>
                </p>
            </form>
        </main>
    );
}
