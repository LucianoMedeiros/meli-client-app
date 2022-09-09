import React from 'react'

import * as Actions from '../../store/product/productActions'
import styles from '../../styles/product-detail.module.scss'
import { CustomSkeleton } from '../requesting/custom-skeleton'
import { SaleInfoSkeleton } from '../requesting/loaders'
import Price from './price'

const SaleInfo = ({ info }) => {
  const amountSolded = info?.sold_quantity === -1 ? 'No ha vendido ninguna.' : `${info?.sold_quantity} vendidos`

  return (
    <div className={styles.saleInfo}>
      <CustomSkeleton actions={[Actions.REQUEST_PRODUCT_BY_ID]} loaderComponent={<SaleInfoSkeleton />}>
        <>
          <small>
            {info?.condition} - {amountSolded}
          </small>
          <h1>{info?.title}</h1>
          <Price price={info?.price} />
          <button>Comprar</button>
        </>
      </CustomSkeleton>
    </div>
  )
}

export default SaleInfo
