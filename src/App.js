import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import PageOne from "./pages/Page1";
import PageTwo from "./pages/Page2";
import PageThree from "./pages/Page3";
import PageFour from "./pages/Page4";
import PageFive from "./pages/Page5";
import PageSix from "./pages/Page6";
import PageSeven from "./pages/Page7";
import PageEight from "./pages/Page8";
import PageNine from "./pages/Page9";
import Footer from "./pages/Footer";
import Button from "react-bootstrap/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCircleUser,
  faWallet,
  faMagnifyingGlass,
  faCirclePlay,
  faCircleInfo,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCircleUser,
  faWallet,
  faMagnifyingGlass,
  faCirclePlay,
  faCircleInfo,
  faEnvelope

);

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <PageOne></PageOne>
      <PageTwo></PageTwo>
      <PageThree></PageThree>
      <PageFour></PageFour>
      <PageFive></PageFive>
      <PageSix></PageSix>
      <PageSeven></PageSeven>
      <PageEight></PageEight>
      <PageNine></PageNine>
      <Footer></Footer>
    </div>
  );
}

export default App;
