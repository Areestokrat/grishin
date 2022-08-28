import React from 'react';
import { Link } from 'react-router-dom';
import './headerLinks.scss';

export const HeaderLinks = ({ positionClassname }) => {
    const className = positionClassname ? `header-links ${positionClassname}` : 'header-links';

    return (
        <div className={className}>
            <Link
                to='/services'
                className='header-links__link'
            >
                Сервисы
            </Link>
            <Link
                to='/logo'
                className='header-links__link'
            >
                Лого
            </Link>
            <Link
                to='/graphics'
                className='header-links__link'
            >
                Графика
            </Link>
            <Link
                to='/videos'
                className='header-links__link'
            >
                Видео
            </Link>
        </div>
    )
};