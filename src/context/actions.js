import{
    ADD_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ITEM,
    RESET_CART,
    TOGGLE_MODAL
} from './types'

export const ADD_PRODUCT_ACTION = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})
export const DELETE_PRODUCT_ACTION = (product) => ({
    type: DELETE_PRODUCT,
    payload: product
})
export const DELETE_ITEM_ACTION = (product, quantity) => {
    if(quantity !== 1) return {
        type: DELETE_ITEM,
        payload: product
    }
    else{
        return{
            type: DELETE_PRODUCT,
            payload: product
        }
    }

}
export const RESET_CART_ACTION = () => ({
    type: RESET_CART
})
export const TOGGLE_MODAL_ACTION = (current) => ({
    type: TOGGLE_MODAL,
    payload: current
})