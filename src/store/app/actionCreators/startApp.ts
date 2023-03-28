import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'

import { IState } from '../../../@types/store'

import { createDateString } from '@/utils'

import { setMe } from '@/store/auth/reducer'

import { setAppLoadingStatus, setDate } from '../reducer'

type Returned = void

type ThunkArg = undefined

type ThunkApiConfig = {
  state: IState
}

const typePrefix = 'app/startApp'

const payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig> = async (_, { dispatch }) => {
  try {
    // start app
    dispatch(setAppLoadingStatus(true))

    // set initial timestamp
    dispatch(setDate(createDateString()))

    // update timestamp every second
    setInterval(() => {
      dispatch(setDate(createDateString()))
    }, 1000)

    const savedMe = localStorage.getItem('saved-me') as string
    const parsedSavedMe = JSON.parse(savedMe)

    dispatch(setMe(parsedSavedMe))

    // fake delay
    // initial data fetching will be here
    await new Promise((r) => setTimeout(r, 300))
  } finally {
    // app starting processes finished
    dispatch(setAppLoadingStatus(false))
  }
}

export default createAsyncThunk(typePrefix, payloadCreator)
