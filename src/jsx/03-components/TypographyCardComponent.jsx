import { LinkElement } from "../04-elements/LinkElement"
import { TitleElement } from "../04-elements/TitleElement"

export const TypographyCardComponent = ({typo}) => {
    const {image, title, description, link} = typo

    return (
        <article className='typography__item'>
            <div className='typography__item-bg'>
                <img src={image} alt="Typography Image" />
            </div>
            <div className='typography__item-info'>
                <TitleElement small="title-element--small">{title}</TitleElement>
                <p className='typography__item-description'>{description}</p>
                <LinkElement>{link}</LinkElement>
            </div>
        </article>
    )
}
