import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Actions from '../../store/product/productActions'
import styles from '../../styles/search.module.scss'

const SearchField = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [term, setTerm] = useState()

  const handleSubmit = e => {
    e.preventDefault()

    if (!term) {
      dispatch(Actions.clear())
      router.push('/')
    } else {
      dispatch(Actions.searchProductsByName(term))
      router.push('/items?q=' + term)
    }
  }

  const { q } = router.query

  useEffect(() => {
    dispatch(Actions.clear())
    dispatch(Actions.searchProductsByName(q))
  }, [q])

  return (
    <form className={styles.searchForm}>
      <fieldset className={styles.fieldContainer}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          className={styles.searchField}
          title="Digite o que deseja buscar"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button className={styles.searchButton} title="Clique para efetuar a busca" onClick={handleSubmit}>
          busca
        </button>
      </fieldset>
    </form>
  )
}

export default SearchField
