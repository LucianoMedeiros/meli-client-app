import axios from 'axios'
const baseURL = 'http://localhost:3003/api'

export const searchByName = async term => {
  const ret = await axios.get(`${baseURL}/items?q=${term}`)
  return ret
}
export const getById = async id => {
  const url = `${baseURL}/items/${id}`
  const ret = await axios.get(url)
  return ret
}
