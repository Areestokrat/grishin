import React from 'react';
import { Header } from './Header';
import { RegSlider } from './RegSlider';
import './mts-dating.scss';

import mtsLogo from '../../logos/mts-dating.svg';
import registration from './images/registration.png';

const MtsDating = () => {
    return (
        <div className='mts-dating__content'>
            <Header />
            <div className='mts-dating__background-rectangle first-rect'></div>
            <div className='mts-dating__background-rectangle second-rect'></div>
            <div className='mts-dating__background-rectangle third-rect'></div>
            <div className='mts-dating__logo'>
                <img src={mtsLogo} alt='mtsLogo' />
                <span>знакомства</span>
            </div>
            <div className='mts-dating__task'>
                <span className='mts-dating__task-first-text'>ЗАДАЧА:</span>
                <span className='mts-dating__task-second-text'>Разработать приложение “Знакомства” для белорусского офиса МТС.</span>
            </div>
            <img src={registration} alt='registration' className='mts-dating__registration-img' />
            <div className='mts-dating__registration-text'>
                <span className='mts-dating__registration-text-header'>РЕГИСТРАЦИЯ</span>
                <span className='mts-dating__registration-text-body'>
                Пошаговая регистрация не отпугнёт пользователя и с большей вероятностью доведёт его до знакомтсва с сервисом
и новыми людьми
                </span>
            </div>
            <RegSlider />
            <div className='mts-dating__app-main-page'>
                <span className='mts-dating__app-main-page-header'></span>
                <span className='mts-dating__app-main-page-text'></span>
                <div className='mts-dating__app-main-page-imgs'>
                    
                </div>
            </div>
        </div>
    )
};

export default MtsDating;