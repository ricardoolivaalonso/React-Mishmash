import { Link } from "react-router-dom"

export const SubmenuSection = () => {
    return (
        <nav className="submenu">
            <ul className="submenu__list">
                <li className="submenu__item">
                    <Link className="submenu__link" to="/shop/all">All</Link>
                </li>
                <li className="submenu__item">
                    <Link className="submenu__link" to="/shop/off">50% Off</Link>
                </li>
                <li className="submenu__item">
                    <Link className="submenu__link" to="/shop/bundles">Bundles</Link>
                </li>
            </ul>
        </nav>
    )
}
