import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLinks } from '../../shared/HeaderLinks';
import './header.scss';

export const Header = () => {
    return (
        <div className='main__header'>
            <span className='main__header-logo'>ГРИШИN</span>
            <HeaderLinks />
            <Link
                to='/me'
                className='main__header-link'
            >
                О себе
            </Link>
        </div>
    )
};