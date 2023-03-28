import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IStateApp } from '../../@types/store'

const name = 'app'

export const initialState: IStateApp = {
  loading: true,
  date: '',
}

const { actions, reducer } = createSlice({
  name,
  initialState,

  reducers: {
    setAppLoadingStatus: (state, action: PayloadAction<IStateApp['loading']>) => {
      state.loading = action.payload
    },

    setDate: (state, action: PayloadAction<IStateApp['date']>) => {
      state.date = action.payload
    },
  },
})

export const { setAppLoadingStatus, setDate } = actions

export default reducer
