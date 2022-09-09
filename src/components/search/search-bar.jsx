import styles from '../../styles/search.module.scss'
import Section from '../section/custom-section'
import SearchField from './search-field'
import SearchLogo from './search-logo'

const SearchBar = () => {
  return (
    <Section className={styles.searchBar} containerClass={styles.container}>
      <>
        <SearchLogo />
        <SearchField />
      </>
    </Section>
  )
}

export default SearchBar
