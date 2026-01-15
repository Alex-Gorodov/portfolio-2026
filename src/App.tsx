import './App.css';
import Hero from './Blocks/Hero/Hero';
import Header from './Blocks/Header/Header';
import Main from './Blocks/Main/Main';
import Container from './Components/Container/Container';
import './Styles/styles.sass';

function App() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <Main/>
    </Container>
  );
}

export default App;
