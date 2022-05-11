
export const TestimonialCardComponent = ({testimonial}) => {
    const {quote, author} = testimonial
    return (
        <article className='testimonial__item'>
            <p className='testimonial__quote'>{quote}</p>
            <p className='testimonial__author'>{author}</p>
        </article>
    )
}
