import { NavLink } from "react-router-dom";

const Nav = () => 
    <nav className="nav__container">
        <ul className="nav__ul">
            <li className="nav__li">
                <NavLink to="/" 
                        style={({isActive}) =>({color:isActive?'#FFFFFF':'',
                        background: isActive?'#4ca3f1':''})}> Home</NavLink></li>
            <li className="nav__li"><NavLink to="/misdemeanours"
                            style={({isActive}) =>({color:isActive?'#FFFFFF':'',
                            background: isActive?'#4ca3f1':''})}>Misdemeanours</NavLink></li>
            <li className="nav__li"><NavLink to="/confession"
                            style={({isActive}) =>({color:isActive?'#FFFFFF':'',
                            background: isActive?'#4ca3f1':''})}>Confess to Us</NavLink></li>
        </ul>
    </nav>

export default Nav;