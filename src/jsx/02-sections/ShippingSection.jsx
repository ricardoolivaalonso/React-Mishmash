import { useContext } from "react"
import { MishContext } from "../../context/store"
import { ShippingCardComponent } from "../03-components/ShippingCardComponent"

export const ShippingSection = () => {
    const [state] = useContext(MishContext)
    const {shipping} = state
    
    return (
        <section className="shipping">
            {
                shipping.map( s => 
                    <ShippingCardComponent key={s.id} shipping={s} />    
                )
            }
            
        </section>
    )
}
