import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Support from './components/Support';
import Labs from './components/Labs';
import About from './components/About';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
    {/* Only difference between Link and NavLink is that navlink adds active class in the clicked element*/}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="labs">Labs</NavLink>
          </li>
        </ul>
      </nav>


      <Routes>
      <Route path="/" element={<MainHeader/>}>
      {/* Default route becomes Home page */}
        <Route index element={<Home/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="*" element={<NotFound/>}/>
       </Route>
      </Routes>
    </div>
  );
}

export default App;
