import { HeaderSection } from "../02-sections/HeaderSection"
import { SubmenuSection } from "../02-sections/SubmenuSection"
import { HeroSection } from "../02-sections/HeroSection"
import { StoreSection } from "../02-sections/StoreSection"
import { ShippingSection } from "../02-sections/ShippingSection"
import { NewsletterSection } from "../02-sections/NewsletterSection"
import { FooterSection } from "../02-sections/FooterSection"
import { CartSection } from "../02-sections/CartSection"

export const ShopPage = () => {

    return (
        <>
            <HeaderSection />
            <SubmenuSection />
            <HeroSection />
            <StoreSection/>
            <ShippingSection />
            <NewsletterSection />
            <CartSection />
            <FooterSection /> 
        </>
    )
}
