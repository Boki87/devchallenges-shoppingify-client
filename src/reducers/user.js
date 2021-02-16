import { createSlice } from '@reduxjs/toolkit'

const user = localStorage.getItem('shoppingify-user')

const userSlice = createSlice({
    name: 'user',
    initialState: user ? JSON.parse(user) : {},
    reducers: {
        loginUser(state, action) {
            localStorage.setItem('shoppingify-user', JSON.stringify(action.payload))
            return action.payload
        },
        logoutUser(state) {
            localStorage.removeItem('shoppingify-user')
            return {}
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer