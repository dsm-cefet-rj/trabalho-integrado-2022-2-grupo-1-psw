import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./routes/index";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="pd-auto">
        <Router />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
