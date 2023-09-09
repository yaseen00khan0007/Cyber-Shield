import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom" ;

import NavBar from "./components/NavBar";

import Home from "./components/Home";
import Education from "./components/Education";
import HSD from "./components/HSD";
import Tools from "./components/Tools";
import ToolsDetail from "./components/ToolsDetail";
import AboutUs from "./components/AboutUs";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

import AlertState from './context/alertState/AlertState';
import LogState from './context/logState/LogState';
import CS_DP from './components/CS_DP';
import PR_DS from './components/PR_DS';


function App() {
  return (
    <>
      <LogState>

        <AlertState>
          
          <BrowserRouter>
            <NavBar/>

            <Routes>

              <Route exact path = '/' element = {<Home /> } />
              <Route exact path = '/cyberSecurity' element = {<CS_DP /> } />
              <Route exact path = '/privacyRisk' element = {<PR_DS /> } />
              <Route exact path = '/hsd' element = {<HSD /> } />
              <Route exact path = '/tools' element = {<Tools /> } />
              <Route exact path = '/toolsDetail' element = {<ToolsDetail /> } />
              <Route exact path = '/aboutUs' element = {<AboutUs /> } />

              <Route exact path = '/signin' element = {<Signin /> } />
              <Route exact path = '/signup' element = {<Signup /> } />

            </Routes>
          
          </BrowserRouter>

        </AlertState>

      </LogState>
    </>
  );
}

export default App;
