'use client'
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/vistoria", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    navigate.push("/cadastrobike");
  };

  return (
    <main className={styles.cadastroMain}>
      <div className={styles.titulo}>CADASTRO</div>
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
            max='2005-11-13'
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
          <label htmlFor="rg">RG:</label>
          <input
            type="text"
            id="rg"
            name="rg"
            value={formData.rg}
            onChange={handleChange}
            maxLength={15}
            minLength={9}
            required

          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            maxLength={14}
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
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            maxLength={8}
            minLength={5}
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
        <p className={styles.txtPC}><Link href="/cadastrobike">já possou cadastro</Link></p>
      </form>
    </main>
  );
}
