import { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "./reducers";
import { initialState } from "./initialState";

export const MishContext = createContext()

export const MishProvider = ({ children }) => {
    const cart = localStorage.getItem('mishmash') ? JSON.parse(localStorage.getItem('mishmash')) : []

    const initial = { 
        ...initialState, 
        cart: cart
    }
    const [state, dispatch] = useReducer(cartReducer, initial)

    useEffect(() => {
        localStorage.setItem("mishmash", JSON.stringify(state.cart))
    }, [state.cart])

    return(
        <MishContext.Provider value={[state, dispatch]}>
            {children}
        </MishContext.Provider>
    )
}