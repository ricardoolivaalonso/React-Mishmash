import { IconBagElement } from "../04-elements/IconBagElement"
import { IconLogoElement } from "../04-elements/IconLogoElement"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { MishContext } from "../../context/store"
import { TOGGLE_MODAL_ACTION } from "../../context/actions"

export const HeaderSection = () => {
    const [state, dispatch] = useContext(MishContext)
    return (
        <header className="header">
            <nav className="main-menu">
                <ul className="main-menu__list">
                    <div className="main-menu__wrapper">
                        <li className="main-menu__item">
                            <Link className="main-menu__link" to="/">
                                <IconLogoElement />
                            </Link>
                        </li>
                        <li className="main-menu__item">
                            <Link className="main-menu__link" to="/shop">
                                Shop
                            </Link>
                        </li>
                    </div>
                    <div className="main-menu__wrapper">
                        <li className="main-menu__item">
                            <a className="main-menu__link" onClick={()=>dispatch(TOGGLE_MODAL_ACTION(true))}><IconBagElement /></a>
                        </li>
                        <li className="main-menu__item">
                            <a className="main-menu__link">Sign in</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}