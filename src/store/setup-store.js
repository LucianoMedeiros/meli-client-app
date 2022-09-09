import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productReducer from './product/productReducer'
import requestingReducer from './requesting/requestingReducer'

export const setupStore = configureStore({
  reducer: {
    product: productReducer,
    requesting: requestingReducer,
  },
  middleware: [thunk],
})
