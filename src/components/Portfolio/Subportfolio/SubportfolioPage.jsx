import React from 'react';
import s from './SubportfolioPage.module.css'

const SubportfolioPage = ({portfolioDetails}) => {

    return (
        <>
            {portfolioDetails.map((portfolio) =>
                <>
                    <div className={s.header} >
                        <img src={ portfolio.cover } alt="Home design" />
                        <h1 className={s.title}>{portfolio.title}</h1>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={s.info}>
                        <h2 className={s.headline}>{ portfolio.headline }</h2>
                        <p className={s.description}>{ portfolio.description }</p>
                        <h5 className={s.yearTitle}>Year</h5>
                        <p className={s.year}>{portfolio.placement.year}</p>
                        
                        <h5 className={s.areaTitle}>Area</h5>
                        <p className={s.area}>{portfolio.placement.area}</p>
                        
                        <h5 className={s.addressTitle}>Address</h5>
                        <p className={s.address}>{ portfolio.placement.address }</p>
                    </div>
                    <div className={s.gallery}>


                    </div>
                </>
            
            
            
            
            
            
            
            )}
        </>
  )
}

export default SubportfolioPage