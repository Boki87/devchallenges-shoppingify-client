import { combineReducers } from '@reduxjs/toolkit'

import user from './user'
import items from './items'
import shoppingList from './shoppingList'

export default combineReducers({
    user,
    items,
    shoppingList
})