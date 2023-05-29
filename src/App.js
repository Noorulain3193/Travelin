import "./App.css";
import FirstNav from "./components/FirstNav";
import Main from "./components/Main";
import InfoInput from "./components/InfoInput";
import BestTours from "./components/BestTours";
import Deluxe from "./components/Deluxe";
import Offers from "./components/Offers";
import ClientSay from "./components/ClientSay";
import Trending from "./components/Trending";
import SendMsg from "./components/SendMsg";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <FirstNav />
      <Main />
      <InfoInput />
      <BestTours />
      <Deluxe />
      <Offers />
      <ClientSay />
      <Trending />
      <SendMsg />
      <Footer />
    </div>
  );
}

export default App;
