import style from './Footer.module.css';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return (

        <footer className={`${style[theme]} ${style.footerContainer}`}>
            <span>Made with ♥️ by yasc</span>
        </footer>

    );

};

export default Footer;