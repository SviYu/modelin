//Parse help to convert json text with tags into innerHTML
import parse from 'html-react-parser';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Detail from '../../Landing/Details/Detail';
import s from './SubportfolioPage.module.css'

const SubportfolioPage = ({ portfolioDetails }) => {
    const { portfolioID } = useParams();
    const [ singlePortfolio, setSinglePortfolio] = useState({});

    useEffect(() => {

         //Open the needed page with correct link name
        let portFolio = portfolioDetails.find((singlePortfolio) => singlePortfolio.path === portfolioID)
        
            if (portFolio !== undefined)
            { setSinglePortfolio(portFolio) }
    }, [portfolioDetails, portfolioID, setSinglePortfolio])

    console.log(portfolioDetails)
    return (
        <>  
            <div className={s.section}>
               <div className={s.header} >
                   
                    {singlePortfolio.gallery ? <img className={s.headerImg} src={`https://modelin.webmcdm.dk${singlePortfolio.cover}`} alt='Home design' /> : 'nothing'
                    }
                    
    
                    <div className={s.overlay}></div>
                    <div className={s.headerInfo}>
                        <h1 className={s.title}>{singlePortfolio.title}</h1>
                        <a href='#info'><i className="fa-solid fa-chevron-down"></i></a>
                        
                    </div>
                </div>
                 {/*  <div className={s.info} id='info'>
                    <h2 className={s.headline}>{singlePortfolio.headline}</h2>
                    
                    <p className={s.description}>{singlePortfolio.description}</p>

                    <h5 className={s.yearTitle}>Year</h5>
                    <p className={s.year}>{singlePortfolio.placement.year}</p>
                    
                    <h5 className={s.areaTitle}>Area</h5>
                    <p className={s.area}>{singlePortfolio.placement.area}</p>
                    
                    <h5 className={s.addressTitle}>Address</h5>
                    <p className={s.address}>{singlePortfolio.placement.address}</p>
                </div> 
 */}
                <div className={s.gallery}>

     
                    
                    {singlePortfolio.gallery ? singlePortfolio.gallery.map(img => <img className={s.image} src={`https://modelin.webmcdm.dk${img.image}`} key={img.image} alt='Design' />) : 'nothing'
                    }
    
                </div>

            </div>
            <Detail />
        </>
  )
}

export default SubportfolioPage