import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./routes/index";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <RecoilRoot>
    <AuthProvider>
    <BrowserRouter>
      <NavbarComponent />
      <div className="pd-auto h-100">
        <Router />
        <div className="fixed-bottom"><Footer /></div>
      </div>
    </BrowserRouter>
    </AuthProvider>


</RecoilRoot>
  );
}

export default App;
