import React from 'react';
import { useParams } from 'react-router-dom';
import s from './SubportfolioPage.module.css'

const SubportfolioPage = ({ portfolioDetails }) => {
    const { portfolioID } = useParams();
    const singlePortfolio = portfolioDetails.find((singlePortfolio) => singlePortfolio.path === portfolioID);

    const { cover, title, headline, description } = singlePortfolio;


    const images = [];

    singlePortfolio.gallery.forEach( portfolio => {
        images.push(<img src={`https://modelin.webmcdm.dk${portfolio.image}`} alt='Design' />)
    });

    return (
        <>  
            <div>
                <div className={s.header} >
                    <img src={`https://modelin.webmcdm.dk${cover}`} alt="Home design" />
                    <h1 className={s.title}>{title}</h1>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className={s.info}>
                    <h2 className={s.headline}>{headline}</h2>
                    <p className={s.description}>{description}</p>

                    <h5 className={s.yearTitle}>Year</h5>
                    <p className={s.year}>{singlePortfolio.placement.year}</p>
                    
                    <h5 className={s.areaTitle}>Area</h5>
                    <p className={s.area}>{singlePortfolio.placement.area}</p>
                    
                    <h5 className={s.addressTitle}>Address</h5>
                    <p className={s.address}>{singlePortfolio.placement.address}</p>
                </div>

                <div className={s.gallery}>

                    {images}
                    
                </div>

            </div>
        </>
  )
}

export default SubportfolioPage