import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Scheduling from './components/Scheduling'
import SelectDoctor from './components/SchedulingComponents/SelectDoctor';
import Location from './components/Location';
import SignUp from './components/ProfileComponents/SignUp';
import Profile from './components/Profile';
import DoctorPage from "./components/HomeComponents/DoctorSection";
function App() {
  return (
    <HashRouter>
            <Routes>
              <Route exact path = '/' element = {<Home/>}/>
              <Route exact path = '/Scheduling' element = {<Scheduling/>}/>
              <Route exact path = '/SelectDoctor' element = {<SelectDoctor/>}/>
              <Route exact path = '/Location' element = {<Location/>}/>
              <Route exact path = '/About' element = {<About/>}/>
              <Route exact path = '/SignUp' element = {<SignUp/>}/>
              <Route exact path = '/Profile' element = {<Profile/>}/>
              <Route exact path = '/AboutDoctors' element = {<DoctorPage/>}/>
            </Routes>
      </HashRouter>
  );
}
export default App;

