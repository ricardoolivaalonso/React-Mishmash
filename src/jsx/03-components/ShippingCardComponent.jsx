import React from 'react'

export const ShippingCardComponent = ({shipping}) => {
    const {image, title, description} = shipping
    return (
        <article className="shipping__item">
            <img className="shipping__svg" src={image} alt="Icon" />
            <p className="shipping__title">{title}</p>
            <p className="shipping__description">{description}</p>
        </article>
    )
}
