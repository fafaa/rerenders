import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { RootState, AppThunk } from "@/app/store"

export interface User {
  firstName: string
  lastName: string
  image?: string
  id: string
}
type state = {
  user: User | null,
  isLoading: boolean
}

const initialState:state = {
  user: null,
  isLoading: true
}

export const counterSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setInitialState: (state, action: PayloadAction<User>) => {
      state.user = {
        firstName: 'Adam',
        lastName: "Małysz",
        image: 'https://static.berkutschi.com/berkutschi/images/news/000/002/659/xlarge/s_508.jpg?1525236908',
        id: 'f81a7ed1-e26a-4b8d-9c1e-7f1e727ca8d4'
      }
      state.isLoading = false
    },
    setUserData: (state, action: PayloadAction<Partial<User>>) => {
      state.user = {
        ...state.user,
        ...action.payload
      }
    },
  },

})

// Export the generated action creators for use in components
export const { setInitialState, setUserData  } = counterSlice.actions

export default counterSlice.reducer
