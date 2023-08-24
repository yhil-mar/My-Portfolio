import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='appContainer'>
      <ThemeProvider>
        {/* <LanguageProvider> */}
        <Header />
        <Main />
        <Footer />
        {/* </LanguageProvider> */}
      </ThemeProvider>
    </div>
  )
}

export default App
