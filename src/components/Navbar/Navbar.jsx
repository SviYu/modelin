import s from './Navbar.module.css';
import logo from './../../assets/logo/logo-modelin.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const active = {
    color: 'slategray',
    fontSize: '35px'
    }
   /* const menuActive =  {
      color: "blue",
      fontSize: "30px"
    }
const menuIcon = document.querySelector('.menuIcon'); */


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    /* console.log('Open', openMenu)
    console.log('Closed', !openMenu) */

   /*  const addActiveClass = () => {
        if (openMenu === true) {
            menuIcon.classList.add(menuActive)
        }
    }
    addActiveClass(); */

    return (
        <>
            <div className={s.navbar}>
                <a href="#header"><img className={s.logo} src={logo} alt="Logo" /></a>
                <div className={s.menuIcon} onClick={toggleMenu}><i className="fa-solid fa-bars"></i></div>
            </div>

            {openMenu ? (
                <div className={s.burgerMenu}>
                    <div className={s.list}>
                        <NavLink to="/modelin" className={s.link} style={({ isActive }) =>
                isActive ? active : {}}>
                            <p className={s.linkItem}>Home</p>
                        </NavLink>

                        <NavLink to="/portfolio" className={s.link} style={({ isActive }) =>
                isActive ? active : {}}>
                            <p className={s.linkItem}>Portfolio</p>
                        </NavLink>
                    
                        <NavLink to="/about" className={s.link} style={({ isActive }) =>
                isActive ? active : {}}>
                            <p className={s.linkItem}>About Me</p>
                        </NavLink>
                    
                        <NavLink to="/contact" className={s.link} style={({ isActive }) =>
                isActive ? active : {}}>
                            <p className={s.linkItem}>Contact</p>
                        </NavLink>
                    
                        <a href="https://instagram.com" className={s.link} target="_blank" rel="noreferrer">
                            <p className={s.linkItem}><i className="fa-brands fa-instagram"></i></p>
                        </a>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Navbar