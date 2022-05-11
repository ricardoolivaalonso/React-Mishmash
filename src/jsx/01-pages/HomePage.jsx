import { HeaderSection } from "../02-sections/HeaderSection"
import { PromotionSection } from "../02-sections/PromotionSection"
import { PartnerSection } from "../02-sections/PartnerSection"
import { ProductSection } from "../02-sections/ProductSection"
import { TestimonialSection } from "../02-sections/TestimonialSection"
import { TypographySection } from "../02-sections/TypographySection"
import { ShippingSection } from "../02-sections/ShippingSection"
import { NewsletterSection } from "../02-sections/NewsletterSection"
import { FooterSection } from "../02-sections/FooterSection"
import { CartSection } from "../02-sections/CartSection"

export const HomePage = () => {

    return (
        <>
            <HeaderSection />
            <PromotionSection />
            <PartnerSection />
            <ProductSection />
            <TestimonialSection />
            <TypographySection />
            <ShippingSection />
            <NewsletterSection />
            <CartSection />
            <FooterSection /> 
        </>        
        
    )
}
