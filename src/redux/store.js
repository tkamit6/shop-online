import { configureStore } from '@reduxjs/toolkit'
import shoppingReducer from './shoppingSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'
import { WebStorage } from 'redux-persist/es/types'

export function createPersistStore() {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null)
      },
      setItem() {
        return Promise.resolve()
      },
      removeItem() {
        return Promise.resolve()
      }
    }
  }
  return createPersistStore('local')
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createPersistStore()

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, shoppingReducer)

export const store = configureStore({
  reducer: { shopping: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
