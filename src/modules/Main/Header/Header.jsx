import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLinks } from '../../shared/HeaderLinks';
import './header.scss';

export const Header = () => {
    return (
        <div className='main__header'>
            <Link to='/' className='main__header-logo'>ГРИШИN</Link>
            <HeaderLinks positionClassname='main-header-links' />
            <Link
                to='/me'
                className='main__header-link'
            >
                О себе
            </Link>
        </div>
    )
};