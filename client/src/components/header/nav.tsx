import { NavLink } from "react-router-dom";
const Nav = () => 
    //<nav className='is-flex is-flex-grow-1 is-align-items-center' style={{width:'100%'}}>
    //<ul  style={{width:'100%'}}
           // className='is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly'>
    <div className="nav__container">
    <nav >
    <ul className="nav__ul">
        <li className="nav__li"><NavLink to="/"> Home</NavLink></li>
        <li className="nav__li"><NavLink to="/misdemeanours">Misdemeanours</NavLink></li>
        <li className="nav__li"><NavLink to="/confession">Confess to Us</NavLink></li>
    </ul>
</nav>
</div>;

export default Nav;