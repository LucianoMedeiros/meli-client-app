import Link from 'next/link'
import styles from '../../styles/search-results.module.scss'
import { formatter } from '../../utilities/price-formatter'

const SearchResultsItem = ({ product }) => {
  return (
    <Link href={`/items/${product.id}`}>
      <li className={styles.resultItem}>
        <div className={styles.imageItem}>
          <img src={product.picture} alt="" />
        </div>
        <div className={styles.descriptionItem}>
          <div className={styles.priceItem}>
            <strong>
              <span>{formatter(product.price).currencySymbol}</span>
              {formatter(product.price).priceFormatted}
            </strong>

            {product.free_shipping ? (
              <div>
                <img src={'/assets/img/ic_shipping.png'} />
              </div>
            ) : (
              ''
            )}
          </div>
          <p>{product.title}</p>
        </div>
        <span className={styles.cityItem}>{product.state_address}</span>
      </li>
    </Link>
  )
}

export default SearchResultsItem
