import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WithSplashScreen from "./components/WithSplashScreen";
import NaviBar from "./components/NaviBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import AccessInfo from "./components/AccessInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <WithSplashScreen />
      <NaviBar />
      <Home />
      <AboutUs />
      <Menu />
      <AccessInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
