import { useContext } from "react"
import { MishContext } from "../../context/store"
import { PromotionCardComponent } from "../03-components/PromotionCardComponent"
import { useParams  } from 'react-router-dom'

export const HeroSection = () => {
    const [state, dispatch] = useContext(MishContext)
    const { hero } = state
    const { id } = useParams()
    let current = 0

    switch (id) {
        case 'all': current = 0; break;
        case 'off': current = 1;  break;
        case 'bundles': current = 2 ; break;
        default: current = 0; break;
    }

    return <PromotionCardComponent promotion={hero[current]} mod="product__item--big"/>
}
