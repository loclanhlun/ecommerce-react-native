import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import createSagaMiddleware from '@redux-saga/core'
import { persistReducer, persistStore, REGISTER } from 'redux-persist'
import authReducer from '../screens/login/redux/authSlice'
import productReducer from '../screens/home/redux/productSlice'
import rootSaga from './rootSaga'
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
})

const sagaMiddleware = createSagaMiddleware()
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
]

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
