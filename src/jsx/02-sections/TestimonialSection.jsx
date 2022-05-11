import { useContext } from 'react'
import { MishContext } from '../../context/store'
import { TestimonialCardComponent } from '../03-components/TestimonialCardComponent'

export const TestimonialSection = () => {
    const [state ] = useContext(MishContext)
    const { testimonials } = state
    return (
        <section className='testimonial'>
            {
                testimonials.map( testimonial => 
                    <TestimonialCardComponent testimonial={testimonial} key={testimonial.id}/>
                )
            }
        </section>
    )
}
