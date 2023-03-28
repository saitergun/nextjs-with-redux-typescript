import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IStateAuth } from '../../@types/store'
import { IMe } from '../../@types/models'

const name = 'auth'

export const initialState: IStateAuth = {
  me: null,
}

const { actions, reducer } = createSlice({
  name,
  initialState,

  reducers: {
    setMe: (state, action: PayloadAction<IMe | null>) => {
      state.me = action.payload
    },
  },
})

export const { setMe } = actions

export default reducer
