import logo from './logo.svg';
import './App.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Loginpage from './component/student/Loginpage';
import Signin from './component/student/Signin';
import Admin from './Components/admin/Admin'; 

function App() {
  return (
  
<BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/registarion' element={<Loginpage/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
