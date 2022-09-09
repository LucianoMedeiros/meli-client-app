import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import CustomHead from '../../components/head/custom-head'
import SearchResults from '../../components/search-results/search-results'
import SearchBar from '../../components/search/search-bar'
import styles from '../../styles/search-results.module.scss'

const SearchResultsPage = () => {
  return (
    <>
      <CustomHead title="Resultado de Busca" description="Teste de aptidão da páginda de resultado de busca" />
      <main className={styles.page}>
        <SearchBar />
        <Breadcrumb />
        <SearchResults />
      </main>
    </>
  )
}

export default SearchResultsPage
