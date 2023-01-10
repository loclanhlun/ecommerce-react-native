import { all } from 'redux-saga/effects'
import productSaga from '../screens/home/redux/productSaga'
export default function* rootSaga() {
  yield all([productSaga()])
}
