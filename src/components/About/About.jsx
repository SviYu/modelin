import React from 'react';
import s from './About.module.css';
import photoBg from './../../assets/landing/about.jpg';
import Service from '../Landing/Service/Service';

const About = () => {
    return (
      <>
        <div className={s.section}>
            <img className={s.bg} src={photoBg} alt="About me" />
            <div className={s.box}>
                <h1 className={s.title}>Alexander Westham</h1>
                <p className={s.text}>Professional Interior Designer. Offering you a full range of interior and furniture design services. Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world. In my projects I strive to create a perfect interior for you. I often ask about your habits, preferences, hobbies, and other activities. I believe that personal approach is the only way that helps to create houses, offices, open spaces, that contain everything you need and meet your expectations.</p>
                <a href='/portfolio' className={s.btn}>Portfolio</a>
            </div> 
        </div>

        <Service />
      </>
  )
}

export default About