import { useContext } from "react"
import { MishContext } from "../../context/store"
import { PromotionCardComponent } from "../03-components/PromotionCardComponent"

export const PromotionSection = () => {
    const [store ] = useContext(MishContext)
    const { promotions } = store
    
    return (
        <section className="promotion">
            <PromotionCardComponent promotion={promotions[0]} mod="promotion__item--big"/>
                    
            <div className="promotion__list">
                {
                    promotions.map((promotion, index) => 
                        index > 0 && <PromotionCardComponent promotion={promotion} key={promotion.id} small={'title-element--small'}/>  
                    )
                }
            </div>
        </section>
    )
}
