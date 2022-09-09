import * as ActionUtility from '../../utilities/base-action-utility'
import * as Effects from './productEffects'

export const REQUEST_PRODUCT_BY_ID = 'REQUEST_PRODUCT_BY_ID'
export const REQUEST_PRODUCT_BY_ID_FINISHED = 'REQUEST_PRODUCT_BY_ID_FINISHED'

export const REQUEST_PRODUCT_LIST = 'REQUEST_PRODUCT_LIST'
export const REQUEST_PRODUCT_LIST_FINISHED = 'REQUEST_PRODUCT_LIST_FINISHED'

export const REQUEST_CLEAR_PRODUCT_LIST = 'REQUEST_CLEAR_PRODUCT_LIST'

export const getById = id => {
  return async dispatch => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCT_BY_ID, Effects.getById, id)
  }
}
export const searchProductsByName = name => {
  return async dispatch => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCT_LIST, Effects.searchByName, name)
  }
}
export const clear = () => {
  return ActionUtility.createAction(REQUEST_CLEAR_PRODUCT_LIST)
}
