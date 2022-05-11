import { TitleElement } from "../04-elements/TitleElement"

export const NewsletterSection = () => {
    return (
        <section className="newsletter">
            <div className="newsletter__bg"></div>

            <div className="newsletter__info">
                <div className="newsletter__wrapper">
                    <div className="newsletter__form">
                        <TitleElement small="title-element--small">Get 20% off your first order</TitleElement>
                        <p className="newsletter__form-description">Subscribe our newsletter and receive a discount when you make your first purchase.</p>

                        <form className="newsletter__form-wrapper">
                            <input className="newsletter__form-input" type="text" placeholder="Your email address"/>
                            <button className="newsletter__form-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
