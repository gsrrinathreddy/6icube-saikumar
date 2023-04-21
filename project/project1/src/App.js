
import './App.css';
import Navbar from './Components/Navbar';
import Aboutme from './Pages/Aboutme';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Hobbies from './Pages/Hobbies';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutme" element={<Aboutme/>}/>
        <Route path="Education" element={<Education/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
