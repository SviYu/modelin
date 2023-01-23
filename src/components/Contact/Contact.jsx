import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Detail from '../Landing/Details/Detail';
import s from './Contact.module.css'

const Contact = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });
    

    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [answer, setAnswer] = useState('');

    const dataToSubmit = {
        "email": email,
        "message": msg
    };

    const submitForm = () => {
        setAnswer(
            <div className={s.answerBlock}>
                <p className={s.answerTopText}>Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world</p>
                <div className={s.answer}>
                    <i className="fa-solid fa-heart"></i>
                    <p className={s.answerText}>Thank you, I will respond asap.</p>
                </div>
            </div>
        )

        /* Posting the message */
        fetch('https://modelin.webmcdm.dk/contacts', {
            method: 'POST',
            body: JSON.stringify(dataToSubmit),
            headers: {'Content-Type': 'application/json;charset=UTF-8'}
        }).then(response => response.json())
          .then(response => console.log('Response', response))
    }

    return (
      <>
        <div className={s.section}>
            <h1 className={s.title}>Contact</h1>
                
            {/* Submitting Form */}
                
                <form onSubmit={handleSubmit(submitForm)} id='form' method='POST' className={s.form}>
                    <p className={s.text}>Email me to order a design or decoration project, supervision, or ask general questions: Contact form for details on the stages and general design project progress, timing, and budget.</p>
                    
                    <input className={s.email}
                        placeholder="Email"
                        {...register('email', {
                            required: "*Email skal udfyldes",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "*Invalid email address"
                            }
                        })}
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <div className={s.errorText}>{errors?.email?.message}</div>
                    

                    <textarea className={s.message}
                        placeholder="Message"
                        {...register('message', { required: true })}
                        value={msg}
                        onChange={ (e) => setMsg(e.target.value)}
                    />
                    <div className={s.errorText}>{errors?.message && <p>*Jeg beder jer om at skrive noget...</p>}</div>


                    <input className={s.button} type="submit" value="Send Message" />
                    
                {answer}
            </form>

        </div>
        
        <Detail />
      </>
  )
}

export default Contact