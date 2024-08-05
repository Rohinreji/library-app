import logo from './logo.svg';
import './App.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Loginpage from './component/student/Loginpage';
import Signin from './component/student/Signin';
import Admin from './Components/admin/Admin'; 
import CommonNavbar from './Components/common/commonNavbar/commonNavbar';
import Footer from './Components/common/footer/footer';
import LandingPage from './Components/common/landingPage/landingPage';
import { StudentNav } from './component/student/studentHome/studentNav/studentNav';

function App() {
  return (

<BrowserRouter >

    <div className="App">

    <Routes>
      <Route path='/registration' element={<Loginpage/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/student/navbar' element={<StudentNav/>} />
      <Route path='/*' element={<h1>The page not available</h1>} />
    </Routes>  
      {/* common */}
      <Route path='/commonNavbar' element={<CommonNavbar/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/landingPage' element={<LandingPage/>}/>


    </Routes>
      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
