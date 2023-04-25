
import './App.css';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pages/Pricing';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Pricing" element={<Pricing/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
