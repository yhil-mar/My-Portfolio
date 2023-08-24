import style from './Main.module.css';
import LandingSection from '../LandingSection/LandingSection';
import AboutSection from '../AboutSection/AboutSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import WorksSection from '../WorksSection/WorksSection';
import ContactSection from '../ContactSection/ContactSection';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import SkillsSection from '../SkillsSection/SkillsSection';

// const Header = () => {

//     const { theme } = useContext(ThemeContext);

//     return (
//         <section className={`${style[theme]} ${style.mainContainer}`}>
//             <AboutSection />
//             <SkillsSection />
//         </section>
//     );
// };

const Main = () => {
    return (

        <section className={style.mainContainer}>
            <LandingSection />
            <AboutSection />
            <ServicesSection />
            <WorksSection />
            <ContactSection />
        </section>

    );
};

export default Main;