import * as Actions from '../../store/product/productActions'
import styles from '../../styles/product-detail.module.scss'

import { CustomSkeleton } from '../requesting/custom-skeleton'
import { PictureSkeleton } from '../requesting/loaders'

const ImageProduct = ({ imageUrl, title }) => {
  return (
    <div className={styles.imageProduct}>
      <CustomSkeleton actions={[Actions.REQUEST_PRODUCT_BY_ID]} loaderComponent={<PictureSkeleton />}>
        <img src={imageUrl} alt={title} />
      </CustomSkeleton>
    </div>
  )
}

export default ImageProduct
