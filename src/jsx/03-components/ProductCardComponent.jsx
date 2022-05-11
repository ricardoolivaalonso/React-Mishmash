import { ButtonElement } from '../04-elements/ButtonElement'
import { LinkElement } from '../04-elements/LinkElement'
import { TitleElement } from '../04-elements/TitleElement'

export const ProductCardComponent = ({product, mod}) => {
    const {image, subtitle, title, description, info, color} = product

    return (
        <article className={`product__item ${mod ? 'product__item--big' : ''}`}>

            <div className="product__item-bg" style={{backgroundColor: color}}>
                <img src={image} alt="Product Image" />
            </div>
            <div className='product__item-overlay' style={{backgroundImage: `linear-gradient(to bottom, transparent 50%, ${color})`}}></div>
            <div className="product__item-info">
                <div className="product__item-top">
                    <span className="product__item-subtitle">{subtitle}</span>
                    <TitleElement>{title}</TitleElement>
                    <p className="product__item-description">{description}</p>
                    <div className="product__item-actions">
                        <ButtonElement color={color}>Add to cart</ButtonElement>
                        <LinkElement>Learn more</LinkElement>
                    </div>
                </div>
                <div className="product__item-bottom">
                    {
                        info.map( i => 
                            <div className="product__item-wrapper" key={i.id}>
                                <p className="product__item-atribute">{i.attribute}</p>
                                <p className="product__item-quantity">{i.quantity}</p>
                            </div>    
                        )
                    }
                </div>
            </div>
        </article>    
    )
}
