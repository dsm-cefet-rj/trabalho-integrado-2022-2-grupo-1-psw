import './styles/App.css';

import { BrowserRouter } from 'react-router-dom';

import NavbarComponent from './components/Navbar';
import Router from './routes/index';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <NavbarComponent />

      <Router />

    </BrowserRouter>
    </div>
  );
}

export default App;