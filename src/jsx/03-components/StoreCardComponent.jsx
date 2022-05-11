import { useEffect, useRef, useContext } from "react"
import { MishContext } from "../../context/store";
import { ADD_PRODUCT_ACTION, TOGGLE_MODAL_ACTION } from "../../context/actions";

export const StoreCardComponent = ({store, iconRef}) => {
   

    const [state, dispatch] = useContext(MishContext)
    const {id, title, price, images } = store
    const imgRef = useRef(0);

    const addProduct = (product) => {
        dispatch( ADD_PRODUCT_ACTION(product) )
        dispatch( TOGGLE_MODAL_ACTION(true) )
    }
    const getImage = (index) => {
        let current
        index ? current = index : current = 0
        imgRef.current.src = images[current].src
        
        return current
    }
    useEffect(()=>{
        getImage()
    },[])

    return (
        <article className="store__item">
            <div className="store__item-bg">
                <button className="store__item-btn" onClick={()=>addProduct(id)}>Add to cart</button>
                { <img key={images[0].id} src={images[0].src} alt="Product Image" ref={imgRef} /> }
            </div>
            <div className="store__item-info">
                <div className="store__item-wrapper">
                    <div className="store__item-title">{title}</div>
                    <div className="store__item-palette">
                        {
                            images.map( (color, index) => 
                                <input 
                                    key={color.id} 
                                    name={id} 
                                    defaultChecked={index === 0}
                                    type="radio" 
                                    className="store__item-color" 
                                    style={{backgroundColor: color.name}}
                                    onClick={()=>getImage(index)}
                                />
                            )
                        }                        
                    </div>
                </div>

                <div className="store__item-wrapper">
                    <span className="store__item-price">€{price}</span>
                </div>
            </div>
        </article>
    )
}
