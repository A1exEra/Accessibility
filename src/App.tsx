import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import theme from './assets/styles/theme';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <HeroSection />
        <About />
        <ContactUs />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
