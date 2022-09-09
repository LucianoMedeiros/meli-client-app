import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import CustomHead from '../../components/head/custom-head'
import PageContent from '../../components/product-detail/page-content'
import SearchBar from '../../components/search/search-bar'
import styles from '../../styles/search-results.module.scss'

const ProductDetailPage = () => {
  return (
    <>
      <CustomHead title="Detalhe do Produto" description="Teste de aptidão da páginda de detalhe de busca" />
      <main className={styles.page}>
        <SearchBar />
        <Breadcrumb />
        <PageContent />
      </main>
    </>
  )
}

export default ProductDetailPage
