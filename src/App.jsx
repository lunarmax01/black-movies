import { Route, Routes } from "react-router-dom";
import Navbar from "./page/navbar";
import Home from "./page/home";
import Footer from "./page/footer";
import Movies_list from "./page/movies-list";

function App() {
  return ( 
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<><Home/></>}/>
      </Routes>
      <Movies_list/>
      <Footer/>
    </>
  );
}

export default App;