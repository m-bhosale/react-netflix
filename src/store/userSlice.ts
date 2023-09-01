import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    user: {},
}

export const userDetail= createSlice({
    name: 'userDetail',
    initialState,
    reducers: {
        setUserData: (state, action) => {
           return action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userDetail.actions

export default userDetail.reducer