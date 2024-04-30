import './App.css';
import Home from './components/Home';
import Footer_boot from './components/Footer_boot';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Navbar_up from './components/Navbar_up';
import Login1 from './components/Login1';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import HomepageTest from './Homepage test/HomepageTest';
import GameExpanded from './Homepage test/gameExpanded/gameExpanded';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar_up/>
      
      <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/login' element={<Login1/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/success' element={<Home/>}></Route>
      <Route path='/resetpassword' element={<ResetPassword/>}></Route>
      <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
      <Route exact path='/homepage' element={<HomepageTest/>}></Route>
      <Route exact path='/homepage1' element={<GameExpanded/>}></Route>

      
      </Routes>
      
      
      <Footer_boot/>

      </Router>
      
    </div>
  );
}

export default App;
