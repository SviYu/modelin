import React from 'react';
import s from './Header.module.css';
import bg from './../../../assets/landing/home.jpg'; 

const Header = () => {
  return (
      <section className={s.section}>
        <img className={s.bg} src={bg} alt="Home" />
        <div className={s.box}>
            <h1 className={s.title}>Modern elegant and luxurios interior</h1>
            <p className={s.undertitle}>Individual approach to the design of private apartments and public areas</p>
            <a href='/portfolio' className={s.btn}>Se Portfolio</a>
        </div>
    </section>
  )
}

export default Header