import CustomHead from '../components/head/custom-head'
import SearchBar from '../components/search/search-bar'

export default function Home() {
  return (
    <>
      <CustomHead title="Busca" description="Teste de aptidão da páginda de busca" />
      <main>
        <SearchBar />
      </main>
    </>
  )
}
