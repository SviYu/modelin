import React from 'react';
import s from './Detail.module.css';

const Detail = () => {
  return (
      <div className={s.section}>
          <h2 className={s.title}>
              Need more Details
          </h2>
          <a className={s.email} href="mailto:info@idp.com">info@idp.com</a>
          <p className={s.text}>Contact me for details on creating and managing design projects, project features, and services and prices</p>
    </div>
  )
}

export default Detail