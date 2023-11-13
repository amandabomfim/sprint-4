'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Cadastro.module.scss";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    email: "",
    rg: "",
    cpf: "",
    celular: "",
    cep: "",
    endereco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
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
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            maxLength={50}
            

          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={50}
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
            required
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="celular">Celular:</label>
          <input
            type="text"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            maxLength={15}
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
            required
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            maxLength={50}
            required
          />
        </div>
        <button type="submit">Cadastrar Bicicleta</button>
      </form>
    </main>
  );
}
