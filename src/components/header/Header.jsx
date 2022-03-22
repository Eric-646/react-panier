
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="catalogue">Catalogue</Link></li>
                    <li><Link to="panier">Panier</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;