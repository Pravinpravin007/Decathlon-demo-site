import logo from './logo.svg';

import './App.css';
import { Login } from './Logintask/Loginform';

import { Signup } from './Logintask/Signup';
import { Home } from './Logintask/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';



function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Home' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );

  
}

export default App;
