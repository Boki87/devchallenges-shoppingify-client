import { createSlice } from '@reduxjs/toolkit'


const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        setItems(state, action) {            
            return action.payload
        },

    }
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer