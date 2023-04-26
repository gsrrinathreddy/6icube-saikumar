
import './App.css';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pages/Pricing';
import Blog from './Components/Pages/Blog';
import Products from './Components/Pages/Products';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Pricing" element={<Pricing/>}/>
        <Route path="Products" element={<Products/>}/>
        <Route path="Blog" element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
