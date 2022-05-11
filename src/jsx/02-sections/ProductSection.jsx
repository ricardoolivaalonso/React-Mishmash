import { useContext } from "react"
import { MishContext } from "../../context/store"
import { ProductCardComponent } from "../03-components/ProductCardComponent"

export const ProductSection = () => {
    const [state ] = useContext(MishContext)
    const { products } = state
    
    return (
        <section className="product">

            <ProductCardComponent product={products[0]} mod="product__item--big"/>

            <div className="product__list">
                {
                    products.map( (product, index) => 
                        index > 0 && <ProductCardComponent product={product} key={product.id}/>   
                    )
                }
                
            </div>
        </section>
    )
}
