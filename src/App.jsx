import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.history.replaceState({}, document.title, window.location.pathname);
    window.scroll({ top: 0, behavior: 'auto' });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, [])

  return (

    < div className='appContainer' >

      {
        isLoading

          ? <LoadingScreen />

          : (
            <ThemeProvider>
              {/* <LanguageProvider> */}
              <Header />
              <Main />
              <Footer />
              {/* </LanguageProvider> */}
            </ThemeProvider>
          )
      }

    </div >

  )

}

export default App
