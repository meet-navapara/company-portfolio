import "./App.css";
import "./style/style.min.css";
import "./style/style.css";
import Service from "./pages/Service";
import Navbar from "./pages/Navbar";
import AboutSection from "./pages/AboutSection";
import ContactUs from "./pages/ContactUs";
import Feature from "./pages/Feature";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="whychooseus">
        <Feature />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
