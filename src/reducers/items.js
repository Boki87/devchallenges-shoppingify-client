import { createSlice } from '@reduxjs/toolkit'


const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        setItems(state, action) {            
            return action.payload
        },
        addItem(state, action) {
            return [...state, action.payload]
        },
        deleteItem(state, action) {
            return state.filter(item => item._id !== action.payload)
        }

    }
})

export const { setItems, addItem, deleteItem } = itemsSlice.actions

export default itemsSlice.reducer