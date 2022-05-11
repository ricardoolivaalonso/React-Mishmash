import { useContext  } from "react"
import { MishContext } from "../../context/store"
import { 
    ADD_PRODUCT_ACTION,
    DELETE_ITEM_ACTION,
    DELETE_PRODUCT_ACTION,
    RESET_CART_ACTION,
    TOGGLE_MODAL_ACTION
} from "../../context/actions"

export const CartSection = () => {
    const [state, dispatch] = useContext(MishContext)
    const {cart, modal} = state

    const res = cart.reduce((acc, item) => acc += (item.price * item.quantity),0 )

    
    return (
        <section className={`cart ${!modal.toggle ? 'is-cart-hidden': ''}`}>

            <div className="cart__info">
                <h2 className="cart__info-title">Added to cart</h2>
                <div className="cart__info-buttons">
                    <button className="cart__info-clear" onClick={()=>dispatch(RESET_CART_ACTION())}>
                        <svg className="svg-icon" viewBox="0 0 20 20">
                            <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306" />
                        </svg>
                    </button>
                    <button className="cart__info-close" onClick={()=>dispatch(TOGGLE_MODAL_ACTION(false))}>
                        <svg viewBox="0 0 20 20">
                            <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z" />
                        </svg>
                    </button>
                </div>
            </div>

            <table className="cart__table">

                <tbody>
                {
                    cart.length > 0 && cart.map( c => 
                        <tr key={c.id} className="is-item-added">
                            <td>
                                <div className="cart__table-column">
                                    <span className="cart__table-title">{c.title}</span>
                                    <span className="cart__table-price">€{(c.price * c.quantity).toFixed(2)}</span>
                                </div>
                            </td>
                            <td>
                                <div className="cart__table-row">
                                    <button className="cart__table-btn" onClick={ ()=>dispatch(DELETE_ITEM_ACTION(c.id,c.quantity)) }>-</button>
                                    <span className="cart__table-quantity">{c.quantity}</span>
                                    <button className="cart__table-btn" onClick={ ()=>dispatch(ADD_PRODUCT_ACTION(c.id)) }>+</button>
                                </div>
                            </td>
                            <td>
                                <button className="cart__table-delete" onClick={ ()=>dispatch(DELETE_PRODUCT_ACTION(c.id)) }>
                                    <svg viewBox="0 0 20 20">
                                        <path d="M14.776,10c0,0.239-0.195,0.434-0.435,0.434H5.658c-0.239,0-0.434-0.195-0.434-0.434s0.195-0.434,0.434-0.434h8.684C14.581,9.566,14.776,9.762,14.776,10 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.691-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.382,10c0-4.071-3.312-7.381-7.382-7.381C5.929,2.619,2.619,5.93,2.619,10c0,4.07,3.311,7.382,7.381,7.382C14.07,17.383,17.382,14.07,17.382,10"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>    
                    ).reverse()
                }
                </tbody>
            </table>

            <p className="cart__total">Final cart value: <span>€{res.toFixed(2)}</span></p>
            
        </section>
       
    )
}
