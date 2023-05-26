
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Photos from './Components/Pages/Photos'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Photos" element={<Photos/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
