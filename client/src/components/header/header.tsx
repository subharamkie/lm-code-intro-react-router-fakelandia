import Nav from "./nav";
import logoImg from '../images/logo.jpg';
const Header = () =>
    <header className='header '>
    <h1>Fakelandia Justice department</h1>
    <img src={logoImg} className="header__img" alt="Fakelandia justice logo"/>
    <Nav/>
    </header>

export default Header;