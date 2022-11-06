import { BrowserRouter } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Router from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Router />
    </BrowserRouter>
  );
}

export default App;