import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLinks } from '../../shared/HeaderLinks';
import './header.scss';

export const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastYPixels, setLastYPixels] = useState(null);

    const handleScroll = () => {
        if (window.scrollY - lastYPixels > 100) {
            setShowHeader(false);
            setLastYPixels(window.scrollY);
        } else if (lastYPixels > window.scrollY) {
            setShowHeader(true);
            setLastYPixels(window.scrollY);
        }
    };

    useEffect(() => {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [lastYPixels]);

    const showHeaderClassname = useMemo(() => {
        return showHeader ? 'show' : 'hide'
    }, [showHeader]);

    return (
        <div className={`mts-dating__header ${showHeaderClassname}`}>
            <div className='mts-dating__header-content'>
                <Link to='/' className='mts-dating__header-logo'>ГРИШИN</Link>
                <HeaderLinks />
                <Link
                    to='/me'
                    className='mts-dating__header-link'
                >
                    О себе
                </Link>
            </div>
        </div>
    )
};