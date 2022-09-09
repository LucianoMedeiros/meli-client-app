import { setupStore } from '../store/setup-store'
import '../styles/globals.css'
import { Provider } from 'react-redux'

const store = setupStore
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
