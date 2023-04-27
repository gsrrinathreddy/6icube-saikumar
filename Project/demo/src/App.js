
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pages/Pricing';
import Products from './Components/Pages/Products';
import Blog from './Components/Pages/Blog';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Products" element={<Products/>}/>
        <Route path="Blog" element={<Blog/>}/>
        <Route path="Pricing" element={<Pricing/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
