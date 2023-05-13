
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Pages/Products';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Products" element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
