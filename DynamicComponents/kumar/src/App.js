
import './App.css';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pages/Pricing';
import Products from './Components/Pages/Products';
import Blog from './Components/Pages/Blog';
import  Autocomplete   from './Components/Autocomplete';
import Checkbox from './Components/Checkbox';
import Badge from './Components/Badge';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  const navpages=['Products','Pricing',"Blog"];
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar pages={navpages} bgcolor="violet" buttoncolor="white"/>
      
      <Routes>
       <Route path="Products" element={<Products/>}/>
       <Route path="Pricing" element={<Pricing/>}/>
       <Route path="Blog" element={<Blog/>}/>
       <Route path="Products/Checkbox" element={<Checkbox/>}/>
       <Route path="Products/Badge" element={<Badge/>}/>
       <Route path="Products/Autocomplete" element={<Autocomplete/>}/>



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
