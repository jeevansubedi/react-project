import logo from './logo.svg';
import './App.css';
import Conditional from './components/Conditional';
import Listrendring from './components/Listrendring';
import Helloworld from "./components/helloworld";
import HelloClassFromClass from './components/HelloClass';
import StyleComponent from './components/Stylecomponent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import {Routes,Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <>
   <Routes>
<Route path="/" element={ <LoginPage/>
}/>
<Route path="/About" element={ <AboutPage/>
}/>

   </Routes>
  {/* <Conditional/> */}
      {/* <Listrendring /> */}
      {/* <StyleComponent /> */}

    
    </>
  );
}

export default App;
