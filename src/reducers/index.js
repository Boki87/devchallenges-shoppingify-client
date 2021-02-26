import { combineReducers } from '@reduxjs/toolkit'

import user from './user'
import items from './items'
import shoppingList from './shoppingList'
import itemSidebar from './itemSidebar'


export default combineReducers({
    user,
    items,
    shoppingList,
    itemSidebar
})