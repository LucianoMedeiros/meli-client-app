import Link from 'next/link'
import styles from '../../styles/search.module.scss'

const SearchLogo = () => {
  return (
    <Link href={'/'}>
      <a className={styles.linkLogo} title="Voltar para página inicial">
        <img className={styles.logo} src="/assets/img/Logo_ML.png" alt="Logo Mercado Livre" />
      </a>
    </Link>
  )
}

export default SearchLogo
