import PromotionImage1 from '../assets/img/promotion__hero.png'
import PromotionImage2 from '../assets/img/promotion__item-1.png'
import PromotionImage3 from '../assets/img/promotion__item-2.png'
import PromotionImage4 from '../assets/img/promotion__item-3.png'
import ProductImage1 from '../assets/img/highlight__hero.png'
import ProductImage2 from '../assets/img/highlight__item-1.png'
import ProductImage3 from '../assets/img/highlight__item-2.png'
import TypographyImage1 from '../assets/img/card__item-1.jpg'
import TypographyImage2 from '../assets/img/card__item-2.jpg'
import TypographyImage3 from '../assets/img/card__item-3.jpg'
import ShippingImage1 from '../assets/img/shipping__item-1.svg'
import ShippingImage2 from '../assets/img/shipping__item-2.svg'
import ShippingImage3 from '../assets/img/shipping__item-3.svg'
import HeroImage1 from '../assets/img/hero-1.png'
import HeroImage2 from '../assets/img/hero-2.png'
import HeroImage3 from '../assets/img/hero-3.png'

import StoreImage01PA from '../assets/img/store__p01--a.jfif'
import StoreImage01PB from '../assets/img/store__p01--b.jfif'
import StoreImage02PA from '../assets/img/store__p02--a.jfif'
import StoreImage02PB from '../assets/img/store__p02--b.jfif'
import StoreImage02PC from '../assets/img/store__p02--c.jfif'
import StoreImage03PA from '../assets/img/store__p03--a.jfif'
import StoreImage03PB from '../assets/img/store__p03--b.jfif'
import StoreImage04PA from '../assets/img/store__p04--a.jfif'
import StoreImage04PB from '../assets/img/store__p04--b.jfif'
import StoreImage05PA from '../assets/img/store__p05--a.jfif'
import StoreImage05PB from '../assets/img/store__p05--b.jfif'
import StoreImage06PA from '../assets/img/store__p06--a.jfif'
import StoreImage06PB from '../assets/img/store__p06--b.jfif'
import StoreImage07PA from '../assets/img/store__p07--a.jfif'
import StoreImage08PA from '../assets/img/store__p08--a.jfif'


export const initialState = {
    promotions: [
        {
            id: "p01",
            image: PromotionImage1,
            title: "Flash Sale",
            span: "Writer's Journal",
            description: "An exclusive sale of the ultimate tool for writer's block to inspire every creative mind.",
            price: "Now €18.50",
            action: "Shop now",
            color: "#fddd7b"
        },
        {
            id: "p02",
            image: PromotionImage2,
            title: "New Arrival",
            span: "Naked",
            description: "Minimalism at its finest. Only the bare essential for your everyday hustling.",
            price: "Selling at €18.00",
            action: "Shop now",
            color: "#dddce6"
        },
        {
            id: "p03",
            image: PromotionImage3,
            title: "Highlight",
            span: "Paperclips",
            description: "The love of paperclips comes in an envelope full of assorted cute ones.",
            price: "Selling at €6.00",
            action: "Shop now",
            color: "#8ab2c0"
        },
        {
            id: "p04",
            image: PromotionImage4,
            title: "Bundles",
            span: "Stock up and save",
            description: "Enjoy an exclusive 25% off on bundled up items and cherish them all year.",
            price: "Starting at €22.50",
            action: "Shop now",
            color: "#d1726d"
        }
    ],
    products: [
        {
            id: "p01",
            image: ProductImage1,
            subtitle: "HIGHLIGHT",
            title: "Writer's Journal",
            description: "Writer'Feeling blocked and unable to write? The Tool for Writer’s Block is your own masterclass with the award-winning writer Emma Gannon.",
            info: [
                {
                    id: "p01",
                    attribute: "Paper",
                    quantity: "100 gsm"
                },
                {
                    id: "p02",
                    attribute: "Colour",
                    quantity: "Lime, Yellow"
                },
                {
                    id: "p03",
                    attribute: "Inside",
                    quantity: "192 pages"
                },
            ],
            color: "#ea763d"
        },
        {
            id: "p02",
            image: ProductImage2,
            subtitle: "BESTSELLER",
            title: "Easy Breezy",
            description: "Not only a feast for the eyes but also high-level versatility in your everyday.",
            info: [
                {
                    id: "p01",
                    attribute: "Paper",
                    quantity: "90 gsm"
                },
                {
                    id: "p02",
                    attribute: "Cover",
                    quantity: "Multiple"
                },
                {
                    id: "p03",
                    attribute: "Inside",
                    quantity: "110 pages"
                },
            ],
            color: "#d5cbc1"
        },
        {
            id: "p03",
            image: ProductImage3,
            subtitle: "PROMOTION",
            title: "The mishmash",
            description: "It just got a whole lot easier to set work and personal apart with paper tabs.",
            info: [
                {
                    id: "p01",
                    attribute: "Paper",
                    quantity: "90 to 120 gsm"
                },
                {
                    id: "p02",
                    attribute: "Cover",
                    quantity: "Matcha"
                },
                {
                    id: "p03",
                    attribute: "Inside",
                    quantity: "176 pages"
                },
            ],
            color: "#aacbdf"
        }
    ],
    testimonials: [
        {
            id: "t01",
            quote: "Your notebooks really are my favourite because they feel handmade, soulful, thoughtful in the choice of colours the golden linings and the choice of paper. It makes my notes feel special. Thanks!",
            author: "Abigail Mary, Customer"
        },
        {
            id: "t02",
            quote: "Just wanted to drop by and thank you for one of the best ever owned notebooks I have ever had in my life! The sky grey log is gorgeous and it really helps me with my writings and my university courses with notes.",
            author: "Ayesha Al Mulla, Customer"
        },
        {
            id: "t03",
            quote: "Thank you so much for making your beautiful stitched and sewn notebooks which have enlivened my thoughts and writing. Making me feel like my little lyrical scribbles are complete books in their own right.",
            author: "Dr. Omar Kholeif, Award-Winning Author"
        },
    ],
    typography: [
        {
            id: "t01",
            image: TypographyImage1,
            title: "Our premium paper",
            description: "We proud ourselves of our paper selection. From the white pages to a selection of fine-papers.",
            link: "See our papers"
        },
        {
            id: "t02",
            image: TypographyImage2,
            title: "Perfect for all pens",
            description: "Whether you have one of those trendy fountain-pens or just a plain simple Uni-ball, we got you covered.",
            link: "See our tests"
        },
        {
            id: "t03",
            image: TypographyImage3,
            title: "Layouts for all tastes",
            description: "Choosing a notebook grid can be hard. To help you out we separated them for a massive deep dive.",
            link: "See layouts"
        }
    ],
    shipping: [
        {
            id: "s01",
            image: ShippingImage1,
            title: "Ships free and with love",
            description: "Free delivery on all orders over €150 and over €100 for Europe."
        },
        {
            id: "s02",
            image: ShippingImage2,
            title: "Secure payments",
            description: "Certified partners and data protection for the best experience."
        },
        {
            id: "s03",
            image: ShippingImage3,
            title: "We would love to help you",
            description: "Any questions? Head over to our support. We're here to help."
        }
    ],
    hero: [
        {
            id: "h01",
            image: HeroImage1,
            title: "New Arrival",
            span: "Notepad",
            description: "Aside from being cute as heck, they have multiple planning and tracking purposes.",
            price: "Selling at €8.00",
            action: "Shop now",
            color: "#c3d4df"
        },
        {
            id: "h02",
            image: HeroImage2,
            title: "20% Off",
            span: "Your first order",
            description: "Subscribe our newsletter and receive a discount when you make a purchase.",
            price: "Learn More",
            action: "Shop now",
            color: "#c1d9c3"
        },
        {
            id: "h03",
            image: HeroImage3,
            title: "Flash Sale",
            span: "Writer's Journal",
            description: "Emma Gannon's scattered writing exercises will help you stir your creativity.",
            price: "Learn More",
            action: "Shop now",
            color: "#f79c62"
        },
    ],
    store: [
        {
            id: "h01",
            title: "Writer's Journal",
            price: 18.50,
            images: [
                {
                    id: "hi01",
                    src: StoreImage01PA,
                    name: "#cdd52a"
                },
                {
                    id: "hi02",
                    src: StoreImage01PB,
                    name: "#f4bf3b",
                }
            ]
        },
        {
            id: "h02",
            title: "Naked",
            price: 18.50,
            images: [
                {
                    id: "hi01",
                    src: StoreImage02PA,
                    name: "#97a6cf"
                },
                {
                    id: "hi02",
                    src: StoreImage02PB,
                    name: "#6f90a8",
                },
                {
                    id: "hi03",
                    src: StoreImage02PC,
                    name: "#b75227",
                }
            ]
        },
        {
            id: "h03",
            title: "Notepad",
            price: 8.50,
            images: [
                {
                    id: "hi01",
                    src: StoreImage03PA,
                    name: "#bed9c6"
                },
                {
                    id: "hi02",
                    src: StoreImage03PB,
                    name: "#f2b5bb",
                }
            ]
        },
        {
            id: "h04",
            title: "Notepad",
            price: 8.50,
            images: [
                {
                    id: "hi01",
                    src: StoreImage04PA,
                    name: "#b49370"
                },
                {
                    id: "hi02",
                    src: StoreImage04PB,
                    name: "#d3ba98"
                }
            ]
        },
        {
            id: "h05",
            title: "Easy Breezy",
            price: 18.50,
            images: [
                {
                    id: "hi01",
                    src: StoreImage05PA,
                    name: "#d5cf31"
                },
                {
                    id: "hi02",
                    src: StoreImage05PB,
                    name: "#cc6d37"
                }
            ]
        },
        {
            id: "h06",
            title: "Holy Silver",
            price: 9.50,
            images: [
                {
                    id: "hi01",
                    src: StoreImage06PA,
                    name: "#d02526"
                },
                {
                    id: "hi02",
                    src: StoreImage06PB,
                    name: "#7e8c6e"
                }
            ]
        },
        {
            id: "h07",
            title: "The Notebook 4 Tabs",
            price: 9.50,
            images: [
                {
                    id: "hi01",
                    src: StoreImage07PA,
                    name: "#bfcbdb"
                }
            ]
        },
        {
            id: "h08",
            title: "Easygoing",
            price: 10.50,
            images: [
                {
                    id: "hi01",
                    src: StoreImage08PA,
                    name: "#7e8c6e"
                }
            ]
        }
    ],
    cart: [
        // {
        //     id: "h01",
        //     name: "product 1",
        //     price: 100,
        //     quantity: 1
        // }
    ],
    modal: { toggle: false }
}