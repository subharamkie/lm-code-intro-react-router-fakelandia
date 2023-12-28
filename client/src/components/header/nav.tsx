import { NavLink } from "react-router-dom";
const Nav = () => 
    <nav className="nav__container">
        <ul className="nav__ul">
            <li className="nav__li"><NavLink to="/"> Home</NavLink></li>
            <li className="nav__li"><NavLink to="/misdemeanours">Misdemeanours</NavLink></li>
            <li className="nav__li"><NavLink to="/confession">Confess to Us</NavLink></li>
        </ul>
    </nav>

export default Nav;