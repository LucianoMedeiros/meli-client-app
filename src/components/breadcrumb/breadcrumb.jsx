import React from 'react'
import Section from '../section/custom-section'
import styles from '../../styles/components/breadcrumb.module.scss'
import { useSelector } from 'react-redux'

const Breadcrumb = () => {
  const caterories = useSelector(state => state.product.search.categories)
  return (
    <Section containerClass={styles.container}>
      <ul className={styles.list}>
        {caterories.map((item, i) => (
          <li key={i} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Breadcrumb
