import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore, REGISTER } from 'redux-persist'
import onbrodingReducer from '../screens/onbroding/redux/onbrodingSlice'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
  onbroding: onbrodingReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export const persistor = persistStore(store)
