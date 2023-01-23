import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import s from './Service.module.css';

const plusStyle = {
    color: '#000',
    fontSize: '17px'
}

const Service = () => {
  return (
      <div className={s.section}>
          <h2 className={s.title}>Services</h2>
          <Accordion className={s.accordionFirst}>
              <AccordionSummary className={s.accSum}
                    expandIcon={<i className="fa-sharp fa-solid fa-plus" style={plusStyle}></i>}>
                  <Typography className={s.sumTitle}>Design projects</Typography>
              </AccordionSummary>
              <AccordionDetails className={s.accDet}>
                  <Typography className={s.sumText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui eros, aliquam vitae lorem id, bibendum vehicula nunc. Etiam efficitur euismod tortor, sit amet placerat nulla condimentum ac. Ut non leo vel magna sagittis pulvinar. Donec iaculis, odio sed bibendum blandit, nisl massa porta massa, nec mollis metus augue eget lectus. Nulla vitae nulla ligula. Sed leo erat, laoreet non tempor vel, dictum non lacus. Curabitur convallis ex ac condimentum consequat.</Typography>
              </AccordionDetails>
          </Accordion>

          <Accordion className={s.accordion}>
              <AccordionSummary className={s.accSum}
                    expandIcon={<i className="fa-sharp fa-solid fa-plus" style={plusStyle}></i>}>
                  <Typography className={s.sumTitle}>Set and interior</Typography>
              </AccordionSummary>
              <AccordionDetails className={s.accDet}>
                  <Typography className={s.sumText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui eros, aliquam vitae lorem id, bibendum vehicula nunc. Etiam efficitur euismod tortor, sit amet placerat nulla condimentum ac. Ut non leo vel magna sagittis pulvinar. Donec iaculis, odio sed bibendum blandit, nisl massa porta massa, nec mollis metus augue eget lectus. Nulla vitae nulla ligula. Sed leo erat, laoreet non tempor vel, dictum non lacus. Curabitur convallis ex ac condimentum consequat.</Typography>
              </AccordionDetails>
          </Accordion>

          <Accordion className={s.accordion} sx={{'& .MuiPaper-root-MuiAccordion-root:before': {backgroundColor: '#red'} }}>
              <AccordionSummary className={s.accSum}
                    expandIcon={<i className="fa-sharp fa-solid fa-plus" style={plusStyle}></i>}>
                  <Typography className={s.sumTitle}>Decoration</Typography>
              </AccordionSummary>
              <AccordionDetails className={s.accDet}>
                  <Typography className={s.sumText}>Offering you a full range of interior and furniture design services. Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world. In my projects I strive to create a perfect interior for you. I often ask about your habits, preferences, hobbies, and other activities.</Typography>
              </AccordionDetails>
          </Accordion>

          <Accordion className={s.accordionLast}>
              <AccordionSummary className={s.accSum}
                    expandIcon={<i className="fa-sharp fa-solid fa-plus" style={plusStyle}></i>}>
                  <Typography className={s.sumTitle}>Supervision</Typography>
              </AccordionSummary>
              <AccordionDetails className={s.accDet}>
                  <Typography className={s.sumText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui eros, aliquam vitae lorem id, bibendum vehicula nunc. Etiam efficitur euismod tortor, sit amet placerat nulla condimentum ac. Ut non leo vel magna sagittis pulvinar. Donec iaculis, odio sed bibendum blandit, nisl massa porta massa, nec mollis metus augue eget lectus. Nulla vitae nulla ligula. Sed leo erat, laoreet non tempor vel, dictum non lacus. Curabitur convallis ex ac condimentum consequat.</Typography>
              </AccordionDetails>
          </Accordion>
    </div>
  )
}

export default Service