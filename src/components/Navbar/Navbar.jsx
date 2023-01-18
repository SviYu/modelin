import s from './Navbar.module.css';
import logo from './../../assets/logo/logo-modelin.png'

const Navbar = () => {

    return (
        <div className={s.navbar}>
            <a href="#header"><img className={s.logo} src={logo} alt="Logo" /></a>
            <div className={s.menuIcon}><i class="fa-solid fa-bars"></i></div>
        </div>
    )
}

export default Navbar