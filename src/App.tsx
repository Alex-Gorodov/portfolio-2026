import './App.css';
import Hero from './Blocks/Hero/Hero';
import Header from './Blocks/Header/Header';
import Main from './Blocks/Main/Main';
import Container from './Components/Container/Container';
import './Styles/styles.sass';
import Footer from './Blocks/Footer/Footer';
import Contact from './Blocks/Contact/Contact';
import Projects from './Blocks/Projects/Projects';


function App() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <Main/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Container>
  );
}

export default App;
