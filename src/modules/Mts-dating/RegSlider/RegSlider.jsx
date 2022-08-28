import React, { useEffect } from 'react';
import './regSlider.scss';

import reg1 from './images/registration-1.png';
import reg2 from './images/registration-2.png';
import reg3 from './images/registration-3.png';
import reg31 from './images/registration-3-1.png';
import reg4 from './images/registration-4.png';
import reg5 from './images/registration-5.png';
import regAddPhoto from './images/registration-add_photo.png';

export const RegSlider = () => {
    const sliderContent = document.querySelector('.reg-slider__content');

    const sliderScrollHandler = () => {
        // if (sliderContent) {
        //     const viewAreaWidth = sliderContent.parentElement.offsetWidth;
        //     for (let i = 0; i < sliderContent.children.length; i++) {
        //         console.log(sliderContent.children[i].)
        //     }

        // }
        // sliderContent.childNodes.forEach(imgNode => {
        //     imgNode.
        // });
    };
    
    // useEffect(() => {
        // if (sliderContent)
        // sliderScrollHandler()
    // }, []);

    return (
        <div className='reg-slider'>
            <div className='reg-slider__content'>
                <img src={reg1} alt='reg1' />
                <img src={reg2} alt='reg2' />
                <img src={reg3} alt='reg3' />
                <img src={reg31} alt='reg3-1' />
                <img src={reg4} alt='reg4' />
                <img src={reg5} alt='reg5' />
                <img src={regAddPhoto} alt='reg-photo' />
            </div>
        </div>
    )
};