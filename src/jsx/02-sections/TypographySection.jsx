import { useContext } from 'react'
import { MishContext } from '../../context/store'
import { TypographyCardComponent } from '../03-components/TypographyCardComponent'
import { TitleElement } from '../04-elements/TitleElement'

export const TypographySection = () => {
    const [state ] = useContext(MishContext)
    const { typography } = state

    return (
        <section className='typography'>
            <div className='typography__info'>
                <TitleElement small="title-element--center">Premium quality, from paper to layouts</TitleElement>
                <p className='typography__info-description'>Expand your knowledge by exploring all the specification pages we have created for you.</p>
            </div>
            <div className='typography__list'>

                {
                    typography.map( t => <TypographyCardComponent key={t.id} typo={t}/>)
                }
               
            </div>
        </section>
    )
}
