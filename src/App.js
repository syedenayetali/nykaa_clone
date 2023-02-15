import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/header";
import Navbar from "./component/navbar/Navbar";
import HeroImage from "./component/heroImage/heroImage";
import Plp from "./component/plp/plp";

function App() {
  return (
    <div className="main">
      <Header />
      <Navbar />
      <HeroImage />
      <Plp />
    </div>
  );
}

export default App;
