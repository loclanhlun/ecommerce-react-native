import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  onbroding: {
    data: null,
    isLoading: false,
    error: null,
  },
}

export const onbrodingSlice = createSlice({
  name: 'onbroding',
  initialState,
  reducers: {
    onbrodingLoading: (state) => {
      return {
        ...state,
        onbroding: {
          ...state.onbroding,
          isLoading: true,
          error: null,
        },
      }
    },
    onbrodingReceived: (state) => {
      return {
        ...state,
        onbroding: {
          ...state.onbroding,
          data: 'ASDASD',
          isLoading: false,
          error: null,
        },
      }
    },
    onbrodingFailed: (state) => {
      return {
        ...state,
        onbroding: {
          ...state.onbroding,
          isLoading: false,
          error: 'FAILED',
        },
      }
    },
  },
})

export const { onbrodingLoading, onbrodingReceived, onbrodingFailed } = onbrodingSlice.actions

export default onbrodingSlice.reducer
