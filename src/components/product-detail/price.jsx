import React from 'react'
import styles from '../../styles/product-detail.module.scss'
import { formatter } from '../../utilities/price-formatter'

const Price = ({ price }) => {
  return (
    <p className={styles.price}>
      <span>{formatter(price).currencySymbol}</span>
      {formatter(price).integerValue}
      <sup>{formatter(price).decimalValue}</sup>
    </p>
  )
}

export default Price
