import './Header.css'
import IMG from '../../imgs/imgs'
import { NavLink } from 'react-router'
export default function Header() {
    return (
        <div className="header">
            <div className="menu-left-side">
                <img src={IMG.logo} alt="" className='logo' />
                <h1 >HENDENY</h1>
            </div>
            <ul className="menu-right-side">
                <NavLink to={'/estoque'} className='item-list'>Estoque</NavLink>
                <NavLink to={'/'} className='item-list'>Home</NavLink>
                <NavLink className='item-list'>Quem Somos</NavLink>
            </ul>
        </div>
    )
}