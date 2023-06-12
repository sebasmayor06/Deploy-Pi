import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home"
import About from "./views/About/About";
import Create from "./views/Create/Create";
import Detail from "./views/Detail/Detail"; 
import axios from "axios"

axios.defaults.baseURL= "https://deploy-pi-production-a192.up.railway.app"

function App() {
  return (


  
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
      <Route path="/detail/:detailId" element={<Detail/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
