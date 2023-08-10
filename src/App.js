
import './App.css';


import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';


function App() {
  return ( 
    <div className="App">
    <Routes>
      <Route path="/" element={<Home /> }></Route>
      <Route path="/about" element={<About /> }></Route>
      <Route path="/service" element={<Service /> }></Route>
      <Route path="/contact" element={<Contact /> }></Route>
    </Routes>
     
     

    </div>
  );
} 

export default App;
