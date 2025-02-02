import { NavLink } from "react-router";
import './Footer.css';
export default function () {
    return (
        <div className="footer">
            <ul className="nav">
                <NavLink to="/" end className={'nav-link'}>
                    Home
                </NavLink>
                <li className="line-break">|</li>
                <NavLink to="/estoque" end className={'nav-link'}>
                    Estoque
                </NavLink>
                <li className="line-break">|</li>
                <NavLink to="/quem-somos" end className={'nav-link'}>
                    Quem Somos
                </NavLink>
            </ul>
            <div className="address-nav">
                <h1 className="street-nav">
                    Rod. Heitor de Alencar Furtado
                </h1>
                <h1 className="city-nav">
                    Paranavaí
                </h1>
                <h1 className="state-nav">
                    Paraná
                </h1>
            </div>
            <h1 className="copy">
                Copyright <span className="enterprise">Hendeny</span> ©2025, by Ariel Machado Rodrigues
            </h1>
        </div>
    )
}