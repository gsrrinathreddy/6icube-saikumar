
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Events from './Components/Pages/Events';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Pages/Blog';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Home" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Blog" element={<Blog/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Events" element={<Events/>}/>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
