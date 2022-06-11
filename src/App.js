import './App.css';
import FooterNavbar from './components/FooterNavbar';
import HeaderNavbar from './components/HeaderNavbar';
import Mappa from './components/Mappa'
import FeedbackForm from './components/FeedbackForm';
import HeroSection1 from './components/HeroSection1';
import PriceCardSection1 from './components/PriceCardSection1'
import MissionStatement from './components/MissionStatement'

function App() {
  return (
    <div>
        <HeaderNavbar/>
        <HeroSection1/>
        <MissionStatement />
        
        <PriceCardSection1  />
       
        <FeedbackForm />
        <FooterNavbar />
    </div>
  );
}

export default App;

// <Mappa  />
//