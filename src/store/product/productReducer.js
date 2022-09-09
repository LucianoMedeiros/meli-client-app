import { produce } from 'immer'
import baseReducer from '../../utilities/base-reducer-utility'
import * as Actions from './productActions'

export const initialState = {
  search: {
    author: {
      name: '',
      lastname: '',
    },
    categories: [],
    items: [],
  },
  currentProduct: {},
}

const productReducer = baseReducer(initialState, {
  [Actions.REQUEST_PRODUCT_LIST_FINISHED](state, { payload }) {
    return produce(state, draftState => {
      draftState.search = payload.data
    })
  },
  [Actions.REQUEST_PRODUCT_BY_ID_FINISHED](state, { payload }) {
    return produce(state, draftState => {
      draftState.currentProduct = payload.data
    })
  },
  [Actions.REQUEST_CLEAR_PRODUCT_LIST](state) {
    return produce(state, draftState => {
      draftState.search = initialState.search
    })
  },
})

export default productReducer
