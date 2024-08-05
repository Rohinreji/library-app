import logo from './logo.svg';
import './App.css';
import Admin from './Components/admin/Admin'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
    <Route path='/admin' element={<Admin/>}/>
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
