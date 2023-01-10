import * as requestFromServer from './productCrud'
import { productsSlice } from './productSlice'
import { call, put, takeLatest } from 'redux-saga/effects'

const { actions } = productsSlice

function* getAllProduct() {
  try {
    const response = yield call(requestFromServer.getProducts)
    yield put(actions.productsReceived(response.data?.products))
  } catch (error) {
    console.log(error)
    yield put(actions.productsFailed(error))
  }
}

function* getProductById({ productId }) {
  try {
    const response = yield call(requestFromServer.getProductById, productId)
    yield put(actions.productDetailsReceived(response.data.product))
  } catch (error) {
    console.log(error)
    yield put(actions.productDetailsFailed(error))
  }
}

function* getProductByCategory({ category }) {
  try {
    const response = yield call(requestFromServer.getProductByCategory, category)
    yield put(actions.productsByCategoryReceived(response.data.product))
  } catch (error) {
    console.log(error)
    yield put(actions.productsByCategoryFailed(error))
  }
}

function* addCard(product) {
  yield put(actions.addCardReceived(product))
}

export default function* productSaga() {
  yield takeLatest(actions.productsStartCall().type, getAllProduct)
  yield takeLatest(actions.productDetailsStartCall().type, getProductById)
  yield takeLatest(actions.productsByCategoryStartCall().type, getProductByCategory)
  yield takeLatest(actions.addCardStartCall().type, addCard)
}
