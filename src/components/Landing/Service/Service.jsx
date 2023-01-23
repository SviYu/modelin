import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './Service.module.css';

const plusStyle = {
    color: '#000',
    fontSize: '17px'
}

const Service = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('./modelin/data/accordions.json')
            .then(response => response.json())
            .then(data => setContent(data))
    }, [] )

  return (
      <div className={s.section}>
          <h2 className={s.title}>Services</h2>

          {content.map((item) => 
              <Accordion className={s.accordion} key={item.id}>
              <AccordionSummary className={s.accSum}
                    expandIcon={<i className="fa-sharp fa-solid fa-plus" style={plusStyle}></i>}>
                      <Typography className={s.sumTitle}>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails className={s.accDet}>
                      <Typography className={s.sumText}>{item.description}</Typography>
              </AccordionDetails>
          </Accordion>
          )}
    </div>
  )
}

export default Service