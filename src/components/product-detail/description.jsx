import React from 'react'
import * as Actions from '../../store/product/productActions'
import styles from '../../styles/product-detail.module.scss'

import { CustomSkeleton } from '../requesting/custom-skeleton'
import { DescriptionSkeleton } from '../requesting/loaders'

const Description = ({ children }) => {
  return (
    <div className={styles.description}>
      <CustomSkeleton actions={[Actions.REQUEST_PRODUCT_BY_ID]} loaderComponent={<DescriptionSkeleton />}>
        <>
          <h2>Descripción del producto</h2>
          <p>{children}</p>
        </>
      </CustomSkeleton>
    </div>
  )
}

export default Description
