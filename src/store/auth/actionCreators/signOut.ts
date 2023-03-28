import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'

import { setMe } from '../reducer'

type Returned = void

type ThunkArg = undefined

type ThunkApiConfig = {}

const typePrefix = 'auth/signOut'

const payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig> = async (_, { dispatch }) => {
  // fake delay
  await new Promise((r) => setTimeout(r, 300))

  localStorage.removeItem('saved-me')

  dispatch(setMe(null))
}

export default createAsyncThunk(typePrefix, payloadCreator)
