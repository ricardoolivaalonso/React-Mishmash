export const TitleElement = ({children, span, small}) => {
    return(
        <h2 className={`title-element ${small ? small : ''}`}>
            {children}
            {span && <><br /><span>{span}</span></> }
        </h2>
    )
}
