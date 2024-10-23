import { Route, Routes } from "react-router-dom";
import Home from "./page/hom-page/home";
function App() {
  return ( 

        <>
            <Home/>
            <Routes>
            
            <Route path="" element={<></>}/>
            
            </Routes>
        
        </>

   );
}

export default App;