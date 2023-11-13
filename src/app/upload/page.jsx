'use client'
import styles from "./Upload.module.css";
import Image from 'next/image'
import { useState } from "react";
import fotoBike from '/public/fotoBike.svg'

export default function Upload() {
    const [msg, setMsg] = useState('')

    const bike = JSON.parse(localStorage.getItem('bike'))

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Get data from form
        const form = new FormData(e.target)
        form.append('image', e.target.fotoBike.files[0])
        console.log(form)
        // localStorage.removeItem('bike')
        try {
            const response = fetch('http://localhost:8000/predict', {
                method: 'POST',
                body: form,
            })
            const data = await response.json()
        } catch (err) {
            
        }
    }
    
    
    
    return (
        bike == null ? <main className={styles.centralizarMain}><h1>Faça o cadastro da bicicleta antes</h1></main> :
        <main className={styles.uploadMain}>
            <div className={styles.colunmConfirmacao}>
                <div className={styles.titulo}>
                    <h1>VISTORIA</h1>
                    <h1>{bike['dsEmail']}</h1>
                </div>
                <div className={styles.instrucaoFoto}>
                    <ul>
                        <li>
                            Escolha um local bem iluminado e com um fundo neutro
                            para que a bicicleta seja claramente visível.
                        </li>
                        <li>Evite áreas com muita sombra ou reflexos.</li>
                        <li>
                            Tire a foto de acordo com a posição indicada.
                        </li>
                        <li>Realize o upload das imagens no local indicado.</li>
                    </ul>
                    <h1 className={styles.titulo}>{msg}</h1>
                </div>
                <form  onSubmit={handleSubmit}>
                <div className={styles.UploadContainer}>
                    <div className={styles.foto}>
                      <Image className={styles.fotoBike} src={fotoBike} />
                        <div>
                            <p>Envie uma foto do lado direito da bike:</p>
                            <input
                                type="file"
                                required
                                name="fotoBike"
                                id="fotoBike"
                            />
                        </div>
                    </div>
                </div>
                <button className="botaoPadrao" type="submit">Enviar</button>
                </form>
            </div>
        </main>
    );
}
