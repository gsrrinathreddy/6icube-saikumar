
import './App.css';
import Navbar from './Components/Navbar';
import Education from './Components/Pages/Education';
import Hobbies from './Components/Pages/Hobbies';
import Aboutus from './Components/Pages/Aboutus';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Education" element={<Education/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
      

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
