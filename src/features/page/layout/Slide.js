import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const slideImages = [
  {
    url: 'https://cdn.hoanghamobile.com/i/home/Uploads/2022/04/18/iphone-11-250-web_637858937453744311.png',
    // caption: 'Slide 1'
  },
  {
    url: 'https://cdn.hoanghamobile.com/i/home/Uploads/2022/04/18/note-10-pro-web.png',
    // caption: 'Slide 2'
  },
  {
    url: 'https://cdn.hoanghamobile.com/i/home/Uploads/2022/04/22/web-ss-uu-dai-01_637862457633781878.jpg',
    // caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (

      <div className="slide-container slide d-none d-sm-block">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='slide' style={{'backgroundImage': `url(${slideImage.url})` ,height:"320px"}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;