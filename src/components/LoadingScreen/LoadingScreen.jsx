import style from './LoadingScreen.module.css';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {

    return (

        <section className={style.loadingScreenContainer}>

            <section className={style.contentContainer}>

                <h2 className={style.loadingTitle}>Loading...</h2>

                <svg className={style.loadingSpinner} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <path fill="none" strokeWidth="4" strokeDasharray="197.57347473144532 59.015453491210934" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeLinecap="round">
                        <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"></animate>
                    </path>
                </svg>

            </section>

        </section>
    );

};

export default LoadingScreen;