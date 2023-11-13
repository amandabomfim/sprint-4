import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.centralizar}>
        <h1>Ocorreu um erro ao tentar acessar está pagina -  404</h1>
        <Link href="/"> Voltar para a página inicial</Link>
    </div> 
  )
}