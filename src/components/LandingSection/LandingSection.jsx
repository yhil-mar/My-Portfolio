import style from './LandingSection.module.css';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const LandingSection = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <section id='landingSection' className={`${style[theme]} ${style.landingContainer}`}>
            <aside className={`${style[theme]} ${style.imageOpacity}`}>
                <h1 className={`${style[theme]} ${style.mainText}`}>Bienvenidos<br />a mi sitio</h1>
                <a className={`${style[theme]} ${style.contactButton}`} href='#contactSection'>Contáctame</a>
            </aside>
        </section>
    );
};

export default LandingSection;