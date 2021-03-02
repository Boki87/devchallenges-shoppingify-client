import { createSlice } from '@reduxjs/toolkit'

const itemSidebarSlice = createSlice({
    name: 'items',
    initialState: {
        showRightSidebar: true,
        showNewItemForm: false,        
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
            return {...state, showItemForm: true, showRightSidebar:true}
        },
        closeItemForm(state, action) {

            let showRightSidebarFlag = true
            if (window.innerWidth < 721) {
                showRightSidebarFlag = false
            }

            return {...state, showItemForm: false, showRightSidebar: showRightSidebarFlag}
        },
        setItemFormData(state, action) {
            return {...state, itemFormData: action.payload}
        },

        openRightSidebar(state, action) {
            return {...state, showRightSidebar: true}
        },
        closeRightSidebar(state, action) {
            return {...state, showRightSidebar: false}
        }
    }
})

export const {
    openNewItemForm,
    closeNewItemForm,
    openItemForm,
    closeItemForm,
    setItemFormData,
    openRightSidebar,
    closeRightSidebar
} = itemSidebarSlice.actions

export default itemSidebarSlice.reducer