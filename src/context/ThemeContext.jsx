import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = 'light';

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (event) => {
        if (event.target.name === 'light') setTheme('light');
        else setTheme('dark');
    };
    
    const data = { theme, handleTheme };

    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    );
}

export { ThemeProvider };
export default ThemeContext;