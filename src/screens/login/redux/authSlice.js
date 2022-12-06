import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: {
    token: null,
    isLoading: false,
    error: null,
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLoading: (state, payload) => {
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: true,
          error: null,
        },
      }
    },
    authReceived: (state) => {
      return {
        ...state,
        auth: {
          ...state.auth,
          token: 'lasdflksjdflksjdf.asdjflksdjflasd.shdfgjkhsdfkjgskfg',
          isLoading: false,
          error: null,
        },
      }
    },
    authFailed: (state) => {
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: false,
          error: 'Login failed',
        },
      }
    },
  },
})

export const { authLoading, authReceived, authFailed } = authSlice.actions

export default authSlice.reducer
