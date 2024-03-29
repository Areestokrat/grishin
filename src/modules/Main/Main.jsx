import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import './main.scss';

import mts from '../../logos/mts-dating.svg';
import maxim from '../../logos/maxim.svg';
import beeline from '../../logos/beeline.svg';
import behealthy from '../../logos/behealthy.svg';
import mymusic from '../../logos/mymusic.svg';
import houses from '../../logos/houses.svg';
import riamo from '../../logos/riamo.svg';

const Main = () => {
    const navigate = useNavigate();

    const handleNavigate = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <div className='main__content'>
            <Header />
            <div className='main__works'>
                <div className='main__works-row'>
                    <div className='main__works-block mts' onClick={() => handleNavigate('mts-dating')}>
                        <div className='main__works-block-logo'>
                            <img src={mts} alt='mts' />
                            <span>знакомства</span>
                        </div>
                    </div>
                    <div className='main__works-block maxim'>
                        <div className='main__works-block-logo'>
                            <img src={maxim} alt='maxim' />
                        </div>
                    </div>
                    <div className='main__works-block playboy'>
                        <div className='main__works-block-logo'>
                            <svg width="89" height="136" viewBox="0 0 89 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.3681 120.059C48.9757 119.559 50.1123 115.498 50.8511 114.689C51.5899 113.88 51.9024 112.869 50.7942 112.206C49.686 111.543 48.1941 112.761 47.0148 113.352C45.8355 113.942 41.2748 116.616 38.4332 117.912C35.5915 119.208 35.0801 118.723 34.1849 115.367C33.0909 111.261 35.7193 108.617 36.7139 107.073C26.0435 105.592 13.6825 97.4515 12.9863 89.1359C12.5174 83.4962 15.97 73.5397 27.365 67.1902C33.6834 63.5485 40.8164 61.5516 48.1088 61.3829C48.1577 61.3183 48.1906 61.243 48.2048 61.1633C48.2189 61.0835 48.2141 61.0016 48.1905 60.9241C48.167 60.8466 48.1255 60.7757 48.0693 60.7173C48.0131 60.6589 47.944 60.6146 47.8674 60.588C29.6099 55.4053 2.44381 38.4094 0 0.315112C8.05603 4.74969 25.2479 18.5716 31.0733 24.3916C38.7173 30.3763 51.732 49.8124 58.1257 60.9003C58.4951 61.2807 60.1858 63.3134 60.3705 59.9322C60.953 49.2077 61.493 37.2425 65.5281 27.55C70.4902 16.273 78.6502 6.69527 89 0C88.3322 6.02586 87.6928 12.0886 87.2098 17.8647C86.4851 26.3037 86.1441 33.8329 84.5244 39.6983C80.9581 52.5577 75.8574 58.6574 68.0003 66.1809C76.9514 74.1884 81.1429 85.8271 74.8061 106.166C73.641 109.892 73.4137 110.752 69.8474 112.554C63.4679 115.772 51.2774 120.236 50.3681 120.062V120.059ZM25.6032 116.588L26.3562 132.471C28.2743 131.167 29.7662 129.648 31.6985 128.342C35.8331 125.534 36.5151 126.755 40.195 130.012L45.8782 136L45.7504 117.675C44.1875 118.716 42.9371 119.863 41.3742 120.903C35.8898 124.556 35.9893 124.945 30.7607 120.945L25.6032 116.588ZM49.9844 124.278L50.2401 128.526L72.1065 122.489L71.9644 118.609L49.9844 124.278ZM39.0582 70.7319C40.1359 70.7285 41.1903 71.0447 42.0879 71.6404C42.9855 72.2361 43.686 73.0846 44.1007 74.0783C44.5153 75.0721 44.6254 76.1664 44.4172 77.2227C44.2089 78.2791 43.6917 79.2499 42.9308 80.0123C42.1699 80.7747 41.1996 81.2943 40.1429 81.5055C39.0862 81.7166 37.9907 81.6096 36.9948 81.1982C35.999 80.7868 35.1477 80.0894 34.5488 79.1943C33.95 78.2992 33.6305 77.2467 33.6308 76.17C33.6293 74.73 34.2 73.3483 35.2178 72.3285C36.2355 71.3088 37.6169 70.7345 39.0582 70.7319Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='main__works-block beeline'>
                        <div className='main__works-block-logo'>
                            <img src={beeline} alt='beeline' />
                            <span>журналы</span>
                        </div>
                    </div>
                    <div className='main__works-block tele2'>
                        <div className='main__works-block-logo'>
                            <svg width="120" height="45" viewBox="0 0 120 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_832_185)">
                            <path d="M0 15.8479V22.342L17.6152 20.4132V13.3842L0 15.8479Z" />
                            <path d="M5.62207 22.7379V45H12.0695V22.0809L5.62207 22.7379Z" />
                            <path d="M19.9944 13.0515V45H26.789V12.0997L19.9944 13.0515Z" />
                            <path d="M28.0591 11.9228V19.2718L37.8721 18.1979V10.5498L28.0591 11.9228Z" />
                            <path d="M28.0591 24.7426V32.2265L34.4981 31.8769V24.1909L28.0591 24.7426Z" />
                            <path d="M28.0591 37.6214V45H37.8721V37.3266L28.0591 37.6214Z" />
                            <path d="M63.2471 6.99111V45H72.1584V5.74451L63.2471 6.99111Z" />
                            <path d="M73.822 5.51285V14.256L86.8059 12.8367V3.69769L73.822 5.51285Z" />
                            <path d="M73.822 20.8301V29.7374L82.3312 29.2742V20.1057L73.822 20.8301Z" />
                            <path d="M73.822 36.2443V45H86.8059V35.8526L73.822 36.2443Z" />
                            <path d="M40.467 10.1876V45H48.2099V9.10529L40.467 10.1876Z" />
                            <path d="M49.6536 36.9728V45H60.889V36.6359L49.6536 36.9728Z" />
                            <path d="M115.911 3.26813C113.1 0.623303 108.968 -0.463267 104.455 0.181094V9.86757C106.28 9.76228 107.765 10.4403 108.426 11.8007C109.467 13.9401 108.392 17.1577 105.852 20.1352C101.936 24.7468 91.5261 34.1554 91.5261 34.1554L106.474 33.6668C115.606 24.789 118.887 19.4024 119.475 12.6766C119.636 10.9423 119.398 9.1942 118.781 7.56438C118.163 5.93455 117.182 4.46552 115.911 3.26813Z" />
                            <path d="M89.6804 35.7641L89.6847 45H120V34.8544L89.6804 35.7641Z" />
                            <path d="M102.711 0.421143C93.9012 2.28684 89.5873 8.73467 90.0742 19.2508L99.4681 18.4085C99.0448 12.4619 100.865 11.0552 102.715 10.2803L102.711 0.421143Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_832_185">
                            <rect width="120" height="45" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <span>музыка</span>
                        </div>
                    </div>
                </div>
                <div className='main__works-row'>
                    <div className='main__works-block behealthy'>
                        <div className='main__works-block-logo'>
                            <img src={behealthy} alt='behealthy' />
                            <span>behealthy</span>
                        </div>
                    </div>
                    <div className='main__works-block mymusic'>
                        <div className='main__works-block-logo'>
                            <img src={mymusic} alt='mymusic' />
                        </div>
                    </div>
                    <div className='main__works-block houses'>
                        <div className='main__works-block-logo'>
                            <img src={houses} alt='houses' />
                        </div>
                    </div>
                    <div className='main__works-block riamo'>
                        <div className='main__works-block-logo'>
                            <img src={riamo} alt='riamo' />
                            <span>риамо</span>
                        </div>
                    </div>
                    <div className='main__works-block burger'>
                        <div className='main__works-block-logo'>
                            <span>чикен бургер</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;