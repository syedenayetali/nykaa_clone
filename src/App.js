import "./App.css";
import Header from "./component/header/header";
import Navbar from "./component/navbar/Navbar";
import HeroImage from "./component/heroImage/heroImage";
import Plp from "./component/plp/plp";
import { Routes, Route } from "react-router";
import ErrorPage from "./component/errorPage/errorPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="main">
              <Header />
              <Navbar />
              <HeroImage />
            </div>
          </>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <>
            <Header />
            <Navbar />
            <Plp />
          </>
        }
      ></Route>
      <Route
        path="*"
        element={
          <>
            <Header />
            <Navbar />
            <ErrorPage />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
