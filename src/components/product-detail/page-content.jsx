import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../store/product/productActions'
import styles from '../../styles/product-detail.module.scss'
import Section from '../section/custom-section'
import Description from './description'
import ImageProduct from './image-product'
import SaleInfo from './sale-info'

const PageContent = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const product = useSelector(state => state.product.currentProduct)
  const { id } = router.query

  useEffect(() => {
    dispatch(Actions.clear())
    dispatch(Actions.getById(id))
  }, [id])

  return (
    <Section containerClass={styles.container}>
      <>
        <ImageProduct imageUrl={product.item?.picture} title={product.item?.title} />
        <SaleInfo info={product.item} />
        <Description>{product.item?.description}</Description>
      </>
    </Section>
  )
}

export default PageContent
