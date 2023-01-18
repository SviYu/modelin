import React from 'react';
import s from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className={s.footer}>
          <div className={s.brand}>
              <p>© 2020 Alexander Westham</p>
              <p>Interior Designer</p>
          </div>
          <div className={s.menu}>
              <Link to='/' className={s.link}>Home</Link>
              <Link to='/portfolio' className={s.link}>Portfolio</Link>
              <Link to='/about' className={s.link}>About Me</Link>
              <Link to='/contact' className={s.link}>Contact</Link>
          </div>
          <div className={s.some}>
              <a href="https://instagram.com" className={s.someLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i> Instagram</a>
              <a href="https://facebook.com" className={s.someLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i> Facebook</a>
          </div>
      </div>
  )
}

export default Footer