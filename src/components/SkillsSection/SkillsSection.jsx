import style from './SkillsSection.module.css';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import LanguageContext from '../../context/LanguageContext';

const SkillsSection = () => {

    const { theme } = useContext(ThemeContext);

    const { texts } = useContext(LanguageContext);

    return (
        <section className={`${style[theme]} ${style.SSContainer}`}>
            <span>{texts.hoInitialText}</span>
        </section>
    );
};

export default SkillsSection;