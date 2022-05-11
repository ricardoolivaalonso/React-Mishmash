import FooterImage1 from '../../assets/img/footer-facebook.svg'
import FooterImage2 from '../../assets/img/footer-instagram.svg'
import FooterImage3 from '../../assets/img/footer-twitter.svg'
import { IconLogoElement } from '../04-elements/IconLogoElement'

export const FooterSection = () => {
    return (
        <footer className='footer'>
            <a className="footer__link"><IconLogoElement /></a>
            <div className='footer__list'>
                <a className="footer__link">
                    <img src={FooterImage1} alt="" />
                </a>
                <a className="footer__link">
                    <img src={FooterImage2} alt="" />
                </a>
                <a className="footer__link">
                    <img src={FooterImage3} alt="" />
                </a>
            </div>
        </footer>
    )
}
