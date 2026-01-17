import './App.css';
import Hero from './Blocks/Hero/Hero';
import Header from './Blocks/Header/Header';
import Main from './Blocks/Main/Main';
import Container from './Components/Container/Container';
import './Styles/styles.sass';
import Footer from './Blocks/Footer/Footer';
import Contact from './Blocks/Contact/Contact';
import VideoTemplate from './Components/VideoTemplate/VideoTemplate';
import Amishav from './Assets/Videos/amishav-iphone-16.mp4';
import Sportapp from './Assets/Videos/sportapp-iphone-16.mp4';


function App() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <Main/>
      <VideoTemplate src={Amishav}/>
      <VideoTemplate src={Sportapp}/>
      <Contact/>
      <Footer/>
    </Container>
  );
}

export default App;
