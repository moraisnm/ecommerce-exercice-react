import LogoSVG from '../../assets/svg/logo.svg'
import style from './NavBar.module.css'

function NavBar(){

    return (
        <div className= {style["main-header"]}>
            <div className="logo-wrapper">
                <img src={LogoSVG} alt="logo" />
            </div>
            <nav className="links-wrapper">
                <div className="main-menu">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
            </div>
                <div className="utility-menu">
                <ul>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#register">Register</a></li>
                    <li><a href="#login">Search</a></li>
                    <li><a href="#register">Cart</a></li>
                    <li><a href="#register">Fav</a></li>   
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default NavBar;