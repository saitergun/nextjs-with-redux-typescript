import { configureStore } from '@reduxjs/toolkit'

import app from './app/reducer'
import auth from './auth/reducer'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    app,
    auth,
  },
})

export default store
