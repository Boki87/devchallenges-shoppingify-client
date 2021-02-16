import { createSlice } from '@reduxjs/toolkit'


const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState: {
        items: [],
        editMode: true,
    },
    reducers: {

        setChecked(state, action) {
            state.items.map(item => {
                if (item._id === action.payload._id) {
                    item.done = !action.payload.done
                }
                return item
            })
        },

        setEditMode(state, action) {
            return {...state, editMode: action.payload}
        },

        addItem(state, action) {            

                if (state.items.length > 0) {                    
                    let search = state.items.find(item => item._id == action.payload._id)                    
                    if (!search) {
                        return { ...state, items: [...state.items, action.payload] }
                    } else {
                        
                        state.items.map(item => {
                            if (item._id === action.payload._id) {
                                item.amount += 1
                            }
                            return item
                        })
                    }
                    
                } else {
                    return {...state, items: [...state.items, action.payload]}    
                }
            

        },
        increaseItem(state, action) {
            state.items.map(item => {
                if (item._id === action.payload._id) {
                    item.amount += 1
                }
                return item
            })            
        },

        decreaseItem(state, action) {
            state.items.map(item => {
                if (item._id === action.payload._id) {
                    if (item.amount > 1) {                        
                        item.amount -= 1
                    }
                }
                return item
            })            
        },

        deleteItem(state, action) {
            let itemsCopy = state.items.filter(item => item._id !== action.payload._id)
            return {...state, items: itemsCopy}            
        }

    }
})

export const { setEditMode, addItem, increaseItem, decreaseItem, deleteItem, setChecked } = shoppingListSlice.actions

export default shoppingListSlice.reducer