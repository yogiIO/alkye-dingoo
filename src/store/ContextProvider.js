import { configureStore, createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'dingoo',
  initialState: {
    accessToken: '',
  },
  reducers: {
    setAccessToken(state, action){
        state.accessToken = action.payload
    }
  },
})

export const {setAccessToken}  = authSlice.actions

export const reducer = authSlice.reducer
export default configureStore({
    reducer: reducer,
  })