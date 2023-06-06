
import './App.css';
import Navbar from './Components/Navbar';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Array1 from './Components/Pages/Array1';
import Array2 from './Components/Pages/Array2';
import Array3 from './Components/Pages/Array3';
import Array4 from './Components/Pages/Array4';
import Array5 from './Components/Pages/Array5';
import Array6 from './Components/Pages/Array6';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Array1" element={<Array1/>}/>
        <Route path="Array2" element={<Array2/>}/>
        <Route path="Array3" element={<Array3/>}/>
        <Route path="Array4" element={<Array4/>}/>
        <Route path="Array5" element={<Array5/>}/>
        <Route path="Array6" element={<Array6/>}/>

      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
