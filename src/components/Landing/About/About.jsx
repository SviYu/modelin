import React from 'react';
import s from './About.module.css';

const About = () => {
  return (
    <div className={s.about}>
          <h2 className={s.title}>Offering you a full range of interior and furniture design services</h2>
          <p className={s.name}>Alexander Westham <br /> Interior Designer</p>
          <p className={s.text}>Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world</p>
    </div>
  )
}

export default About