import { useSelector } from 'react-redux'
import * as Actions from '../../store/product/productActions'
import styles from '../../styles/search-results.module.scss'
import { CustomSkeleton } from '../requesting/custom-skeleton'
import { ItemResultSkeleton } from '../requesting/loaders'
import Section from '../section/custom-section'
import SearchResultsItem from './search-result-item'

const SearchResults = () => {
  const productList = useSelector(state => state.product.search.items)
  return (
    <Section containerClass={styles.container}>
      <ul className={styles.resultList}>
        <CustomSkeleton actions={[Actions.REQUEST_PRODUCT_LIST]} loaderComponent={<ItemResultSkeleton />}>
          {productList.map((item, i) => (
            <SearchResultsItem key={i} product={item} />
          ))}
        </CustomSkeleton>
      </ul>
    </Section>
  )
}

export default SearchResults
