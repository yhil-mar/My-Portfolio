import style from './NavBar.module.css';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import LanguageContext from '../../context/LanguageContext';

const NavBar = () => {

    // const { theme, handleTheme } = useContext(ThemeContext);

    // const { language, texts, handleLanguage } = useContext(LanguageContext);

    // return (
    //     <section className={`${style[theme]} ${style.navContainer}`}>
    //         <section className={style.leftContainer}>
    //             <span className={style.imgContainer}>
    //                 {
    //                     theme === 'light' ?
    //                         <img className={style.imgTheme} src='/images/moon-dark.png' alt='moon' name='dark' onClick={handleTheme} /> :
    //                         <img className={style.imgTheme} src='/images/sun-light.png' alt='sun' name='light' onClick={handleTheme} />
    //                 }
    //             </span>
    //             <span>yasc</span>
    //         </section>
    //         <section className={style.rightContainer}>
    //             <span className={style.nbTextButton}>{texts.nbAboutMeButton}</span>
    //             <span className={style.nbTextButton}>{texts.nbSkillsButton}</span>
    //             <span className={style.nbTextButton}>{texts.nbTechnologiesButton}</span>
    //             <span className={style.nbTextButton}>{texts.nbProjectsButton}</span>
    //             {
    //                 language === 'en' ?
    //                     <button className={`${style.langButton}`} value='es' onClick={handleLanguage}>Es</button> :
    //                     <button className={`${style.langButton}`} value='en' onClick={handleLanguage}>En</button>
    //             }
    //         </section>
    //     </section>
    // );

    const { theme, handleTheme } = useContext(ThemeContext);


    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <section className={`${style[theme]} ${style.navContainer} ${visible ? style.navVisible : style.navHidden}`}>
            <section className={style.leftContainer}>
                <span className={style.imgContainer}>
                    {
                        theme === 'light' ?
                            <img className={style.imgTheme} src='/images/moon-dark.png' alt='moon' name='dark' onClick={handleTheme} /> :
                            <img className={style.imgTheme} src='/images/sun-light.png' alt='sun' name='light' onClick={handleTheme} />
                    }
                </span>
                <h1 className={style.navLogo}>YASC</h1>
            </section>

            <section className={style.rightContainer}>
                <a className={`${style[theme]} ${style.navSection}`} href='#landingSection'>Inicio</a>
                <a className={`${style[theme]} ${style.navSection}`} href='#aboutSection'>Acerca</a>
                <a className={`${style[theme]} ${style.navSection}`} href='#servicesSection'>Servicios</a>
                <a className={`${style[theme]} ${style.navSection}`} href='#worksSection'>Portafolio</a>
                {/* <a className={`${style[theme]} ${style.navSection}`} href='#clientsSection'>Testimonios</a> */}
                <a className={`${style[theme]} ${style.navSection}`} href='#contactSection'>Contacto</a>
            </section>
        </section>
    );
};

export default NavBar;