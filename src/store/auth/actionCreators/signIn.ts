import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'

import { SignInForm } from '@/@types/forms'
import { IState } from '../../../@types/store'

import { setMe } from '../reducer'
import { faker } from '@faker-js/faker'

type Returned = void

type ThunkArg = SignInForm

type ThunkApiConfig = {
  state: IState
}

const typePrefix = 'auth/signIn'

const payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig> = async (
  { first_name, last_name, email },
  { dispatch },
) => {
  // fake delay
  await new Promise((r) => setTimeout(r, 1000))

  const nextMe = {
    id: faker.datatype.uuid(),
    first_name,
    last_name,
    email,
  }

  localStorage.setItem('saved-me', JSON.stringify(nextMe))

  dispatch(setMe(nextMe))
}

export default createAsyncThunk(typePrefix, payloadCreator)
