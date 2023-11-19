import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Rating from "./components/Rating/Rating";
import Add from "./components/Add/Add";
import MiddleSection from "./components/MiddleSection/MiddleSection";
import Stock from "./components/Stock/Stock";
import StockGraph from "./components/StockGraph/StockGraph";
import Facility from "./components/Facility/Facility";
import UserManual from "./components/UserManual/UserManual";
import Member from "./components/Member/Member";
import Experience from "./components/Experience/Experience";
import Annousement from "./components/Annousement/Annousement";
import TradeContainer from "./components/TradeContainer/TradeContainer";
import CoreMember from "./components/CoreMember/CoreMember";
import Starter from "./components/Starter/Starter";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Rating />
      <Add />
      <MiddleSection />
      <Stock />
      <StockGraph />
      <Facility />
      <UserManual />
      <Member />
      <Experience />
      <Annousement />
      <TradeContainer />
      <CoreMember />
      <Starter />
      <Footer />
    </div>
  );
}

export default App;
