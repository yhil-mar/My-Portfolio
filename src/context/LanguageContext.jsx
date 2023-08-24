import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = 'en';

const translations = {
    en: {
        nbAboutMeButton: 'About me',
        nbSkillsButton: 'Skills',
        nbTechnologiesButton: 'Technologies',
        nbProjectsButton: 'Projects',
        hoInitialText: 'This is Home Page'
    },
    es: {
        nbAboutMeButton: 'Sobre mi',
        nbSkillsButton: 'Habilidades',
        nbTechnologiesButton: 'Tecnologías',
        nbProjectsButton: 'Proyectos',
        hoInitialText: 'Esta es la página de Inicio'
    }
}

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (event) => {
        if (event.target.value === 'en') {
            setLanguage('en');
            setTexts(translations.en);
        } else {
            setLanguage('es');
            setTexts(translations.es);
        };
    };

    const data = { language, texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    );
};

export { LanguageProvider };
export default LanguageContext;