import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./routes/index";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
      <NavbarComponent />
      <div className="pd-auto h-100">
        
        <Router />
      </div>
      <Footer />
    </BrowserRouter>


</RecoilRoot>
  );
}

export default App;
