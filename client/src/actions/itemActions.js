import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS} from './types'

export const getItems = () => ({
    type: GET_ITEMS
})

export const deleteItem = (id) => ({
    type: DELETE_ITEMS,
    payload: id
})

export const addItem = (obj) => ({
    type: ADD_ITEMS,
    payload: obj
})