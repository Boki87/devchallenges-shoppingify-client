import { createSlice } from '@reduxjs/toolkit'

const itemSidebarSlice = createSlice({
    name: 'items',
    initialState: {
        showNewItemForm: false,
        newItemData: null,

        showItemForm: false,
        itemFormData: null,
    },
    reducers: {
        openNewItemForm(state, action) {
            return {...state, showNewItemForm: true}
        },
        closeNewItemForm(state, action) {
            return {...state, showNewItemForm: false}
        },
        
        openItemForm(state, action) {
            return {...state, showItemForm: true}
        },
        closeItemForm(state, action) {
            return {...state, showItemForm: false}
        },
        setItemFormData(state, action) {
            return {...state, itemFormData: action.payload}
        }
    }
})

export const {
    openNewItemForm,
    closeNewItemForm,
    openItemForm,
    closeItemForm,
    setItemFormData
} = itemSidebarSlice.actions

export default itemSidebarSlice.reducer