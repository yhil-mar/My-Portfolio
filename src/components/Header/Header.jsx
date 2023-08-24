import style from './Header.module.css';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Header = () => {

    const { theme, handleTheme } = useContext(ThemeContext);


    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setMenuVisible(false);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [prevScrollPos, visible]);

    return (

        <header className={`${style[theme]} ${style.headerSection} ${visible ? style.headerVisible : style.headerHidden}`}>

            <section className={`${style[theme]} ${style.navContainer}`}>

                <section className={style.leftContainer}>

                    <div className={style.imgContainer}>
                        {
                            theme === 'light' ?
                                <img className={style.imgTheme} src='/images/moon-dark.png' alt='moon' name='dark' onClick={handleTheme} /> :
                                <img className={style.imgTheme} src='/images/sun-light.png' alt='sun' name='light' onClick={handleTheme} />
                        }
                    </div>

                    <h2 className={style.navLogo}>YASC</h2>

                </section>

                <div className={`${style[theme]} ${style.navButton}`} onClick={handleMenu}>
                    {
                        !menuVisible ?
                            <svg className={`${style[theme]} ${style.iconButton}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg> :
                            <div className={`${style[theme]} ${style.iconButton}`}>✖</div>
                    }
                </div>

                <section className={`${style.menuContainer} ${menuVisible ? style.menuVisible : undefined}`}>
                    <a className={`${style[theme]} ${style.menuButton}`} href='#landingSection' onClick={handleMenu}>Inicio</a>
                    <a className={`${style[theme]} ${style.menuButton}`} href='#aboutSection' onClick={handleMenu}>Acerca</a>
                    <a className={`${style[theme]} ${style.menuButton}`} href='#servicesSection' onClick={handleMenu}>Servicios</a>
                    <a className={`${style[theme]} ${style.menuButton}`} href='#worksSection' onClick={handleMenu}>Portafolio</a>
                    {/* <a className={`${style[theme]} ${style.menuButton}`} href='#clientsSection' onClick={handleMenu}>Testimonios</a> */}
                    <a className={`${style[theme]} ${style.menuButton}`} href='#contactSection' onClick={handleMenu}>Contacto</a>
                </section>
            </section>

        </header>

    );
};

export default Header;