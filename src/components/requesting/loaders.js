import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from '../../styles/search-results.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

export const ItemResultSkeleton = () => {
  const Item = () => {
    return (
      <li className={styles.resultItem}>
        <div className={styles.imageItem}>
          <Skeleton count={1} height={180} width={200} />
        </div>
        <div className={styles.descriptionItem}>
          <div className={styles.priceItem}>
            <strong>
              <Skeleton count={1} height={24} width={300} />
            </strong>
          </div>
          <p>
            <Skeleton count={1} height={48} width={500} />
          </p>
        </div>
        <span className={styles.cityItem}>
          <Skeleton count={1} height={24} width={180} />
        </span>
      </li>
    )
  }

  return (
    <>
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  )
}
export const DescriptionSkeleton = () => {
  const Item = () => {
    return (
      <>
        <Skeleton count={1} height={48} style={{ marginBottom: '24px' }} />
        <Skeleton count={5} height={20} style={{ marginBottom: '8px' }} />
      </>
    )
  }

  return (
    <>
      <Item />
    </>
  )
}
export const SaleInfoSkeleton = () => {
  const Item = () => {
    return (
      <>
        <Skeleton count={1} height={16} style={{ marginBottom: '24px' }} />
        <Skeleton count={3} height={16} style={{ marginBottom: '8px' }} />
        <Skeleton count={1} height={36} width={'80%'} style={{ marginTop: '24px' }} />
        <Skeleton count={1} height={48} style={{ marginTop: '24px' }} />
      </>
    )
  }

  return (
    <>
      <Item />
    </>
  )
}
export const PictureSkeleton = () => {
  const Item = () => {
    return <Skeleton count={1} height={560} width={560} />
  }

  return (
    <>
      <Item />
    </>
  )
}
