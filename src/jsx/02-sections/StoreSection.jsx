import { useContext } from "react"
import { MishContext } from "../../context/store"
import { StoreCardComponent } from "../03-components/StoreCardComponent"

export const StoreSection = () => {
    const [state] = useContext(MishContext)
    const {store} = state
    
    return (
        <section className="store">
            { store.map( s => <StoreCardComponent key={s.id} store={s} />) }
        </section>
    )
}
