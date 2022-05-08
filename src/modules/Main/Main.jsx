import React from 'react';
import { Header } from './Header';
import './main.scss';

import mts from '../../logos/mts-dating.svg';
import maxim from '../../logos/maxim.svg';
import playboy from '../../logos/playboy.svg';
import beeline from '../../logos/beeline.svg';

const Main = () => {
    return (
        <div className='main__content'>
            <Header />
            <div className='main__works'>
                <div className='main__works-row first-row'>
                    <div className='main__works-block'>
                        <div className='main__works-block-logo'>
                            <img src={mts} alt='mts' />
                            <span>знакомства</span>
                        </div>
                    </div>
                    <div className='main__works-block'>
                        <div className='main__works-block-logo'>
                            <img src={maxim} alt='maxim' />
                        </div>
                    </div>
                    <div className='main__works-block'>
                        <div className='main__works-block-logo'>
                            <img src={playboy} alt='playboy' />
                        </div>
                    </div>
                    <div className='main__works-block'>
                        <div className='main__works-block-logo'>
                            <img src={beeline} alt='beeline' />
                            <span className='beeline-text'>журналы</span>
                        </div>
                    </div>
                    <div className='main__works-block'></div>
                </div>
                <div className='main__works-row'>
                    <div className='main__works-block'></div>
                    <div className='main__works-block'></div>
                    <div className='main__works-block'></div>
                    <div className='main__works-block'></div>
                    <div className='main__works-block'></div>
                </div>
            </div>
        </div>
    )
};

export default Main;