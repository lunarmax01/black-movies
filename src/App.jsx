import { Route, Routes } from "react-router-dom";
import Navbar from "./page/navbar";
import Home from "./page/home";

function App() {
  return ( 
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;