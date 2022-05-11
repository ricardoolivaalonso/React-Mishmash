import { initialState } from "./initialState";
import{
    ADD_PRODUCT,
    DELETE_ITEM,
    DELETE_PRODUCT,
    RESET_CART,
    TOGGLE_MODAL
} from './types'


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:

            const [newProduct] = state.cart.filter( c => c.id === action.payload )
            
            if(newProduct){
                return{
                    ...state,
                    cart: state.cart.map( c => {
                        if(c.id === action.payload){
                            return {
                                ...c,
                                quantity: c.quantity + 1
                            }
                        }
                        return c
                    })
                }
            }
            else{
                const [infoProduct] = state.store.filter( s => s.id === action.payload )
                const {id, title, price} = infoProduct
                
                return{
                    ...state,
                    cart: [
                        ...state.cart,
                        { id, title, price, quantity: 1 }
                    ]
                }
            }


        case DELETE_ITEM:
            return{
                ...state,
                cart: state.cart.map( c => {
                    if(c.id === action.payload){
                        if(c.quantity > 1){
                            return {
                                ...c,
                                quantity: c.quantity - 1
                            }
                        } 
                    }
                   return c
                })
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter( c => c.id !== action.payload )
            }

        case RESET_CART:
            return {
                ...state,
                cart: []
            }

        case TOGGLE_MODAL:
            return{
                ...state,
                modal: { toggle: action.payload}
            }

        default:
            return state
    }
}