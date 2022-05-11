import { ButtonElement } from "../04-elements/ButtonElement"
import { TitleElement } from "../04-elements/TitleElement"

export const PromotionCardComponent = ({promotion, mod, small}) => {
    const {image, title, span, description, price, action, color} = promotion   

    return (
        <article className={`promotion__item ${mod ? 'promotion__item--big' : ''}`} >
            <div className="promotion__item-bg" style={{backgroundColor: color}}>
                <img src={image} alt="Product Image"/>
            </div>
            <div className="promotion__item-info">
                <div className="promotion__item-wrapper">
                 
                    <TitleElement span={span} small={small}>{title}</TitleElement>
                    <p className="promotion__item-description">{description}</p>
                </div>
                <div className="promotion__item-wrapper">
                    <p className="promotion__item-price">{price}</p>
                    <ButtonElement color={color}>{action}</ButtonElement>
                </div>
            </div>
        </article>  
    )
}
