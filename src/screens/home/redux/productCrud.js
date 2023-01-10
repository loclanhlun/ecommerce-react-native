import axios from 'axios'

export const PRODUCT_URL = 'api/product'
export const PRODUCT_BY_ID_URL = 'api/product/find'
export const PRODUCT_BY_CATEGORY_URL = 'api/product/find/category'
export const getProducts = () => {
  return axios.get(PRODUCT_URL)
}

export const getProductById = (productId) => {
  return axios.post(`${PRODUCT_BY_ID_URL}`, { productId })
}

export const getProductByCategory = (category) => {
  return axios.post(`${PRODUCT_BY_CATEGORY_URL}`, { category })
}
