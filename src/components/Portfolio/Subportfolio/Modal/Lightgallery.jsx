import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import React from 'react';
/* import s from './Modal.module.css' */

const Lightgallery = ( {images}) => {


  return (
      <LightGallery plugins={[lgZoom]} mode="lg-fade">
        <div>
          {images}
        </div>
      </LightGallery>
  )
}

export default Lightgallery