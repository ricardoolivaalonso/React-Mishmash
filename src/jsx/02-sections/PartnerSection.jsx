import PartnerImage1 from '../../assets/img/partner-1.png'
import PartnerImage2 from '../../assets/img/partner-2.png'
import PartnerImage3 from '../../assets/img/partner-3.avif'
import PartnerImage4 from '../../assets/img/partner-4.png'

export const PartnerSection = () => {
    return (
        <section className='partner'>
            <h2 className='partner__title'>We're in over 100 stores around the world</h2>
            <div className='partner__list'>
                <a className='partner__item'>
                    <img src={PartnerImage1} alt="Partner Image" />
                </a>
                <a className='partner__item'>
                    <img src={PartnerImage2} alt="Partner Image" />
                </a>
                <a className='partner__item'>
                    <img src={PartnerImage3} alt="Partner Image" />
                </a>
                <a className='partner__item'>
                    <img src={PartnerImage4} alt="Partner Image" />
                </a>
            </div>
        </section>
    )
}
